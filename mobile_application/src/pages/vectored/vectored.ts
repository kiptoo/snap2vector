import { FileOpener } from '@ionic-native/file-opener';
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NavController, PopoverController, Platform, NavParams, ModalController } from "ionic-angular";

import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ToastProvider } from '../../services/ui-services/toast';
import { LoadingProvider } from '../../services/ui-services/loading';
import { VectorProvider } from '../../services/component-services/vector';
import { ImagePreviewPage } from '../image-preview/image-preview';

declare var cordova: any;
@Component({
  selector: 'page-vectored',
  templateUrl: 'vectored.html',
  styles: [`
  .ion-md-square-outline, .ion-md-checkbox {
    font-size: 18px;
  }
  `]
})
export class VectoredPage implements OnInit {
  vectorizedImages: Array<any> = [];
  orderId;

  writePermission = false;

  constructor(
    public nav: NavController,
    public popoverCtrl: PopoverController,

    public toast: ToastProvider,
    public platform: Platform,
    public transfer: FileTransfer,
    public navParams: NavParams,
    public loading: LoadingProvider,
    private modalCtrl: ModalController,
    public changeDetectorRef: ChangeDetectorRef,
    private fileOpener: FileOpener,
    private file: File,
    public socialSharing: SocialSharing,
    private vectorService: VectorProvider) {

  }

  ngOnInit() {
    this.checkPermission();
    this.orderId = this.navParams.get('data');
    this.getVectorizedImagesFromServer(this.orderId);
  }


  getVectorizedImagesFromServer(orderId) {
    this.vectorService.getVectorizedImagesFromServer(orderId)
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(item => {
          this.vectorizedImages.push(item);
          // this.changeDetectorRef.detectChanges();
        });

      });
  }

  download(fileName, url) {
    if (!this.platform.is('cordova')) {
      console.log(url)
      saveAs(url, fileName);
    };
    if (!this.writePermission) {
      this.getPermission();
    } else {
      this.loading.showLoading()
      var ext = fileName.substr(fileName.lastIndexOf('.'));
      var filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));

      var img_path;
      img_path = cordova.file.externalRootDirectory + 'SnapToVector/Vectors/' + filenameNoExt + '-' + this.orderId + ext;
      if (this.platform.is('android')) {
        img_path = cordova.file.externalRootDirectory + 'SnapToVector/Vectors/' + filenameNoExt + '-' + this.orderId + ext;
      } else {
        img_path = cordova.file.documentsDirectory + filenameNoExt + '-' + this.orderId + ext;
      }

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(url, img_path).then((entry) => {
        this.loading.hideLoading();
        this.toast.newToast('Vector downloaded');

      }, (error) => {

        this.loading.hideLoading();
        this.toast.newToast('Error downloading vector, Please try again.');

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

  checkPermission() {
    if (!this.platform.is('cordova')) return;
    let permissions = cordova.plugins.permissions;
    permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function (result) {
      if (!result.hasPermission) {
        this.writePermission = false;
      } else {
        //downloadFile()
        this.writePermission = true;
        console.log("permission already granted");
      }
    }.bind(this));
  }

  open(fileName, url) {
    if (!this.platform.is('cordova')) {
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
    };
    if (this.writePermission) {
      this.loading.showLoading()
      let path_ext;
      if (this.platform.is('android')) {
        path_ext = cordova.file.externalRootDirectory + 'SnapToVector/Vectors/';
      } else {
        path_ext = cordova.file.documentsDirectory;
      }

      var ext = fileName.substr(fileName.lastIndexOf('.'));
      var filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));

      this.file.checkFile(path_ext, filenameNoExt + '-' + this.orderId + ext).then(d => {
        console.log(d);

        this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + this.orderId + ext).then((response: any) => {
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
        let img_path = cordova.file.cacheDirectory + 'SnapToVector/Vectors/' + filenameNoExt + '-' + this.orderId + ext;
        if (this.platform.is('android')) {
          img_path = cordova.file.cacheDirectory + 'SnapToVector/Vectors/' + filenameNoExt + '-' + this.orderId + ext;
        } else {
          img_path = cordova.file.tempDirectory + filenameNoExt + '-' + this.orderId + ext;
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
          })
        }, (error) => {

          this.loading.hideLoading();
          this.toast.newToast('Error downloading image, Please try again.');

        });

      });
    } else {

      this.loading.showLoading()
      let img_path = cordova.file.cacheDirectory + 'SnapToVector/Vectors/' + fileName;
      if (this.platform.is('android')) {
        img_path = cordova.file.cacheDirectory + 'SnapToVector/Vectors/' + fileName;
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
        })
      }, (error) => {

        this.loading.hideLoading();
        this.toast.newToast('Error downloading image, Please try again.');

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
}