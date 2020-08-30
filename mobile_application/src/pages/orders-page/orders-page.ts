import { SocialSharing } from '@ionic-native/social-sharing';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Component, ChangeDetectorRef } from "@angular/core";
import { NavController, Events, ModalController, Platform } from "ionic-angular";
import { saveAs } from 'file-saver';

import { VectoredPage } from "../vectored/vectored";
import { SMS } from '@ionic-native/sms';
import { RevisionImagePage } from "../revision-image/revision-image";
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { ToastProvider } from '../../services/ui-services/toast';
import { LoadingProvider } from '../../services/ui-services/loading';
import { AlertsProvider } from '../../services/ui-services/alerts';
import { StorageService } from '../../services/core/storage';
import { OrderProvider } from '../../services/component-services/order';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, UserInfo } from 'firebase';
import { ImagePreviewPage } from '../image-preview/image-preview';

declare var cordova: any;
@Component({
  selector: 'page-orders-page',
  templateUrl: 'orders-page.html'
})
export class OrdersPage {

  userObj: User = {} as User;
  orders: Array<any> = [];
  completedOrders = [];
  inprogressOrders = [];
  attentionRequeredOrders = [];
  orderTabs = "inProgress";

  att_new_count = 0;
  comp_new_count = 0;
  writePermission = false;


  constructor(
    public nav: NavController,
    public loading: LoadingProvider,
    public toast: ToastProvider,

    public events: Events,
    private afAuth: AngularFireAuth,
    public sms: SMS,
    public modalCtrl: ModalController,
    public changeDetectorRef: ChangeDetectorRef,
    private orderService: OrderProvider,
    public platform: Platform,
    public transfer: FileTransfer,
    public alert: AlertsProvider,
    private fileOpener: FileOpener,
    private file: File,
    public socialSharing: SocialSharing,
    private storage: StorageService) {



    events.subscribe('order:placed', () => {
      if (this.userObj.uid === '') {
        this.afAuth.authState.subscribe((user: User) => {
          this.userObj = user;
          this.getOrdersFromServer(this.userObj.uid);
        })
      }
    });

    this.platform.resume.subscribe(() => {
      //console.log(this.nav.getActive());
      this.ionViewWillEnter();

    });
  }

  ionViewWillEnter() {
    this.att_new_count = 0;
    this.comp_new_count = 0;
    this.checkPermission();
    this.loading.showLoading();
    this.afAuth.authState.subscribe((user: UserInfo) => {
      if (user) {
        this.getOrdersFromServer(user.uid);
        this.loading.hideLoading();
      }
    });
  }

  async getOrdersFromServer(userId) {
    await this.orderService.getOrdersFromServer(userId)
      .subscribe((data: any) => {
        this.orders = data;
        this.orders.sort(function (a, b) {
          var keyA = new Date(a.date),
            keyB = new Date(b.date);
          // Compare the 2 dates
          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
        });

        this.completedOrders = [];
        this.inprogressOrders = [];
        this.attentionRequeredOrders = [];
        for (let index = 0; index < this.orders.length; index++) {
          if (this.orders[index].accepted === true && this.orders[index].delivered) {
            this.completedOrders.push(this.orders[index]);
            if (this.orders[index].isViewedByUser === false) {
              this.comp_new_count++;
            }
          } else if (this.orders[index].accepted != true && this.orders[index].delivered) {
            this.attentionRequeredOrders.push(this.orders[index]);
            if (this.orders[index].isViewedByUser === false) {
              this.att_new_count++;
            }
          }
          else {
            this.inprogressOrders.push(this.orders[index]);
          }
        }
        console.log(this.inprogressOrders);
        console.log(this.completedOrders);
        // this.changeDetectorRef.detectChanges();

      });
  }

  requestRevision(order) {
    this.nav.push(RevisionImagePage, { data: order });
    /* let modal = this.modalCtrl.create(RevisionModalPage, { data: orderId});
    modal.present();
    modal.onDidDismiss((data: any) => {
    }); */
  }

  acceptOrder(orderObj) {

    this.alert.newAlert("Are you sure?",
      "More revisions cannot be requested once order is complete.",
      [
        {
          text: "No",
          handler: () => {
          }
        },
        {
          text: "Yes",
          handler: () => {
            this.loading.showLoading();
            orderObj.accepted = true;
            this.orderService.acceptOrder(orderObj).subscribe((data: any) => {
              this.loading.hideLoading();
              setTimeout(() => {
                this.toast.newToast('Order Accepted');
              }, 3000)
            });

          }
        }
      ]
    );


  }

  viewOrderDetails(orderObj) {
    this.nav.push(VectoredPage, {
      data: orderObj._id
    })
  }

  refreshList() {
    console.log("refresh");
    this.loading.showLoading();
    this.afAuth.authState.subscribe((user: any) => {
      this.getOrdersFromServer(user.uid);
      this.loading.hideLoading();
    })
  }

  message() {
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the native android SMS messaging
        //intent: '' // send SMS without open any other app
      }
    };
    this.sms.send("15187791415", "", options);
  }
  download(fileName, url, order) {
    if (!this.platform.is('cordova')) {
      saveAs(url, 'test.jpg')
      return
    };
    if (!this.writePermission) {
      this.getPermission();
    } else {
      this.loading.showLoading()
      var ext = fileName.substr(fileName.lastIndexOf('.'));
      var filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));

      img_path = cordova.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
      var img_path;
      if (this.platform.is('android')) {
        img_path = cordova.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
      } else {
        img_path = cordova.file.documentsDirectory + filenameNoExt + '-' + order.id + ext;
      }
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(url, img_path).then((entry) => {
        this.loading.hideLoading();
        this.showDownloadAlert(img_path, fileName, order);
        // let toast = this.toastCtrl.create({
        //   message: 'Image downloaded',
        //   duration: 2000,
        //   position: 'bottom',
        //   cssClass: 'dark-trans',
        //   closeButtonText: 'OK',
        //   showCloseButton: true
        // });
        //
      }, (error) => {

        this.loading.hideLoading();
      });
    }
  }

  getPermission() {
    if (!this.platform.is('cordova')) return;
    let permissions = cordova.plugins.permissions;
    permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function (result) {
      if (!result.hasPermission) {
        var errorCallback = function () {
          console.warn('Storage permission is not turned on')
        }
        // Asking permission to the user
        permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, function (status) {
          if (!status.hasPermission) {
            errorCallback()
          } else {
            // proceed with downloading
            //downloadFile()
            this.writePermission = true;
            console.log("permission granted");
          }
        }.bind(this), errorCallback)
      } else {
        //downloadFile()
        this.writePermission = true;
        console.log("permission already granted");
      }
    }.bind(this));
  }
  switchTo(val) {
    this.orderTabs = val;
    // this.changeDetectorRef.detectChanges();
  }


  checkPermission() {
    if (!this.platform.is('cordova')) return;
    let permissions = cordova.plugins.permissions;
    permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function (result) {
      if (!result.hasPermission) {
        this.writePermission = false;
        console.log("permission not granted");
      } else {
        //downloadFile()
        this.writePermission = true;
        console.log("permission already granted");
      }
    }.bind(this));
  }


  open(fileName, url, order) {
    if (!this.platform.is('cordova')) {
      let modal = this.modalCtrl.create(ImagePreviewPage, {
        url: url
      }, {
          cssClass: 'image-preview',
          showBackdrop: true
        });
      modal.present();
      return;
    };
    if (this.writePermission) {
      this.loading.showLoading()

      let path_ext;
      if (this.platform.is('android')) {
        path_ext = cordova.file.externalRootDirectory + 'SnapToVector/Images/';
      } else {
        path_ext = cordova.file.documentsDirectory;
      }

      var ext = fileName.substr(fileName.lastIndexOf('.'));
      var filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));


      this.file.checkFile(path_ext, filenameNoExt + '-' + order.id + ext).then(d => {
        console.log(d);

        this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + order.id + ext).then((response: any) => {
          response.file(meta => {
            console.log(meta);
            this.loading.hideLoading();
            this.fileOpener.open(meta.localURL, meta.type)
              .then((d) => {
                console.log(d);
              })
              .catch(e => {
                console.log(e);
              });
          });
        })

      }).catch(err => {
        console.log(err);
        let img_path = cordova.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        if (this.platform.is('android')) {
          img_path = cordova.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        } else {
          img_path = cordova.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
        }
        const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.download(url, img_path).then((entry) => {
          console.log(entry);

          this.file.resolveLocalFilesystemUrl(entry.nativeURL).then((response: any) => {
            response.file(meta => {
              console.log(meta);
              this.loading.hideLoading();
              this.fileOpener.open(meta.localURL, meta.type)
                .then((d) => {
                  console.log(d);
                })
                .catch(e => {
                  console.log(e);
                });
            });
          }, (err) => {
            this.loading.hideLoading();
            console.log(err);
          })
        }, (error) => {

          this.loading.hideLoading();
          this.toast.newToast('Error downloading image, Please try again.');
        });

      });
    } else {


      this.loading.showLoading()
      let img_path = cordova.file.cacheDirectory + 'SnapToVector/Images/' + fileName;
      if (this.platform.is('android')) {
        img_path = cordova.file.cacheDirectory + 'SnapToVector/Images/' + fileName;
      } else {
        img_path = cordova.file.tempDirectory + fileName;
      }
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(url, img_path).then((entry) => {
        console.log(entry);

        this.file.resolveLocalFilesystemUrl(entry.nativeURL).then((response: any) => {
          response.file(meta => {
            console.log(meta);
            this.loading.hideLoading();
            this.fileOpener.open(meta.localURL, meta.type)
              .then((d) => {
                console.log(d);
              })
              .catch(e => {
                console.log(e);
              });
          });
        }, (err) => {
          this.loading.hideLoading();
          console.log(err);
        })
      }, (error) => {

        this.loading.hideLoading();
        this.toast.newToast('Error downloading image, Please try again.',
        )

      });
    }
  }

  share(filename, url) {
    this.loading.showLoading();
    this.socialSharing.share(null, null, url, null).then(res => {
      this.loading.hideLoading();
    }).catch(err => {
      this.loading.hideLoading();
    });
  }

  orderViewed(type) {
    if (type === "attentionRequired") {
      console.log(type);

      if (this.att_new_count > 0) {
        for (let index = 0; index < this.attentionRequeredOrders.length; index++) {
          const element = this.attentionRequeredOrders[index];
          console.log(element);
          element.isViewedByUser = true;
          this.orderService.updateOrder(element).subscribe((res) => {
            this.att_new_count--;
          });
        }

      }

    } else if (type === "completed") {
      console.log(type);
      if (this.comp_new_count > 0) {
        for (let index = 0; index < this.completedOrders.length; index++) {
          const element = this.completedOrders[index];
          console.log(element);
          element.isViewedByUser = true;
          this.orderService.updateOrder(element)
            .subscribe(res => {
              this.comp_new_count--;
            });
        }
      }
    }
  }

  showDownloadAlert(path, filename, order) {
    this.alert.newAlert("File Downloaded", "Location : " + path.substr(8),
      [
        {
          text: "OK",
        },
        {
          text: "Open",
          handler: () => {
            this.open(filename, '', order);
          }
        }
      ]
    );
  }


  // openDir(){
  //   let path = cordova.file.externalRootDirectory + 'SnapToVector/Images/';
  //   // this.fileOpener.open(path, 'vnd.android.document/directory')
  //   this.fileOpener.open(path, 'text/directory')
  //     .then((d) =>{
  //       console.log(d);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //   });
  // }

}