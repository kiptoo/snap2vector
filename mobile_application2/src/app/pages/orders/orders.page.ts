import { Component, OnInit } from '@angular/core';
import { OrderProvider } from 'src/app/providers/order';
import { User } from 'firebase';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/providers/alert.service';
import { LoadingService } from 'src/app/providers/loading.service';
import { ToastService } from 'src/app/providers/toast.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { SMS } from '@ionic-native/sms/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ImagePreviewPage } from '../image-preview/image-preview.page';
import { RevisionImagePage } from '../revision-image/revision-image.page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Base64 } from '@ionic-native/base64/ngx';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss']
})
export class OrdersPage  implements OnInit {
 
  public user:any; 
  displayedOrders:any;

  userObj: User = {} as User;
  orders: Array<any> = [];
  completedOrders = [];
  inprogressOrders = [];
  attentionRequeredOrders = [];
  orderTabs = 'inProgress';
//here creating object to access file transfer object.  
private fileTransfer: FileTransferObject; 
  att_new_count = 0;
  comp_new_count = 0;
  writePermission = false;

  constructor(
    private orderService: OrderProvider,
    private navCtrl: NavController,
    private alert: AlertService,
    private loading: LoadingService,
    private toast: ToastService,
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private sms: SMS,
    private base64: Base64,
    private http: HttpClient,
    private transfer: FileTransfer,
    private androidPermissions: AndroidPermissions,
    private modalCtrl: ModalController,
    private file: File,
    private fileOpener: FileOpener,
    private socialSharing: SocialSharing
  ) {
     this.loading.presentLoadingWithOptions();
      this.afAuth.authState.subscribe((user: any) => {
        console.log(user);
    this.user=user;
    this.refreshList(user);

        },(err)=>{
        this.toast.presentToastBottom('unable to load orders', 'danger');
      console.log(err);
        this.loading.dismissLoading();

    });
    // this.refreshList(this.user);
      // console.log(this.user);
     // this.loading.presentLoading();
    //   this.platform.resume.subscribe(() => {
    //   //console.log(this.nav.getActive());
    //   this.ionViewWillEnter();

    // });
   }
  ngOnInit() {
 
  // let k=this.myFunction(); 
  // console.log(k);
 //  this.refreshList(this.user);
  this.getPermission();
 
   
    };
  

  ionViewWillEnter() {
  //   this.att_new_count = 0;
  //   this.comp_new_count = 0;
  //   //this.getPermission();
    this.loading.presentLoadingWithOptions();
  //this.refreshList(this.user);
   
  }
 doInfinite(event: any): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {
        const displayedOrderslength = this.displayedOrders.length;
        try {
          this.displayedOrders = this.displayedOrders.concat(this.inprogressOrders.slice(displayedOrderslength, displayedOrderslength + 10))
          event.target.complete()
          resolve();
        } catch (e) {
          this.toast.presentToastBottom('No more orders', 'primary');
          resolve();
        }
      }, 500);
    })
  }
  async getOrdersFromServer(userId) {
    await this.orderService.getOrdersFromServer(userId)
      .subscribe((data: any) => {
        console.log(data)
        this.orders = data;
        this.orders.sort((a, b) => {
          const keyA = new Date(a.date),
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
        this.loading.dismissLoading();
         this.displayedOrders=this.inprogressOrders.slice(0, 10);
           // this.displayedOrders = data.reverse().filter(obj => {
           //      return obj.delivered === false && obj.accepted === false && obj.revisionRequested === false;
           //    }).slice(0, 10);
        console.log(this.inprogressOrders);
        console.log(this.completedOrders);
        // this.changeDetectorRef.detectChanges();

      });
  }

  async requestRevision(order) {
    const modal = await this.modalCtrl.create({
      component: RevisionImagePage,
      //cssClass: 'image-preview',
      //showBackdrop: true,

      componentProps: { orderObj: order }
    });
    modal.present();
  }

  acceptOrder(orderObj) {

    this.alert.newAlert('Are you sure?',
      'More revisions cannot be requested once order is complete.',
      [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.loading.presentLoading();
            orderObj.accepted = true;
            this.orderService.acceptOrder(orderObj).subscribe((data: any) => {
              this.loading.dismissLoading();
              setTimeout(() => {
                this.toast.presentToastBottom('Order Accepted', 'dark');
              }, 3000)
            });

          }
        }
      ]
    );


  }

  async viewOrderDetails(orderObj) {
    const modal = await this.modalCtrl.create({
      component: ImagePreviewPage,
      cssClass: 'modal-fullscreen',
     // showBackdrop: true,
      componentProps: { order:orderObj }
    });
    modal.present();
  }

  public refreshList(user) {
    console.log('refresh');
    //  this.loading.dismissLoading();
    // this.loading.presentLoading();
    console.log(user);
        console.log(user.uid);

      this.getOrdersFromServer(user.uid);
     // this.loading.dismissLoading();
       // setTimeout(() => {
       //        this.loading.dismissLoading();
       //        }, 2000)
      

  }

  message(order) {
    console.log(order);
    let orderid=order._id;
    const options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the native android SMS messaging
        //intent: '' // send SMS without open any other app
      }
    };
    this.sms.send('15187791415', 'Hello Customer Service, I need help with order number:'+orderid, options);
  }


  download(fileName, url, order) {
    let ext = fileName.substr(fileName.lastIndexOf('.'));
      console.log("Extension"+ext);
      let filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
      console.log(filenameNoExt);
        let file_Name = filenameNoExt + '-' + order.id + ext;
         console.log(file_Name);
    // console.log(this.inprogressOrders);
    if (!this.platform.is('cordova')) {
      window.open(url);
     // saveAs(url, fileName)
      //return
      return
    } 
    else {
      this.loading.presentLoading();
       this.getPermission();
      //  console.log('afer permission');
      // if (this.writePermission) {
      
      // if(!this.writePermission){
      //   this.toast.presentToastBottom('Permission not granted', 'danger');
      //    return false;

      // }
      // return true
      
      // }
      console.log('start downloading');
   this.http.get(url, {responseType: 'blob'}).subscribe((data: Blob) => {
        console.log(fileName);
        console.log('already got file,now downloading');
         console.log(data);
          const ext = fileName.substr(fileName.lastIndexOf('.'));
      console.log("Extension"+ext);
      const filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
      console.log(filenameNoExt);
        const file_Name = filenameNoExt + '-' + order.id + ext;
         console.log(file_Name);

               let img_path;
      img_path = this.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
      if (this.platform.is('android')) {
        img_path = this.file.dataDirectory + '/'
        //img_path = this.file.dataDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
      } else {
         img_path = this.file.documentsDirectory + '/'
        //img_path = this.file.documentsDirectory + filenameNoExt + '-' + order.id + ext;
      }
      console.log("image path"+img_path);
        console.log(this.file.dataDirectory); 
        this.file.writeFile(img_path, file_Name, data, { replace: true })
        .then((fileEntry) => {
        this.toast.presentToastBottom('File saved successfully', 'dark');
        console.log(fileEntry);
        console.log('write successful');
        this.loading.dismissLoading();
       this.showDownloadAlert(img_path, fileName,url, order);
        
        })
        .catch(error => {
        console.log(error);
        });
        });

    // }
    // else{
    //         console.log('no permission granted');
    // }
      //this.loading.presentLoading();
     //  const ext = fileName.substr(fileName.lastIndexOf('.'));
     //  console.log("filename"+ext);
     //  const filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
     //   console.log("filename"+filenameNoExt);
     //  let img_path;
     //  img_path = this.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
     //  if (this.platform.is('android')) {
     //    img_path = this.file.dataDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
     //  } else {
     //    img_path = this.file.documentsDirectory + filenameNoExt + '-' + order.id + ext;
     //  }
     //  console.log("image path"+img_path);
     // //this.fileTransfer = this.transfer.create();
     // this.fileTransfer =this.orderService.getfiletransfer();
     // console.log('fileTransfer: ');  
     //      console.log(JSON.stringify(this.fileTransfer));

     //  this.fileTransfer.download(url, img_path).then((entry) => {
     //     console.log("success downloading");
     //    this.loading.dismissLoading();
     //    this.showDownloadAlert(img_path, fileName, order);
     //  }, (error) => {
     //     console.log("error downloading");
     //     console.log(error);
     //    this.loading.dismissLoading();
     //  });
    }
  }

  getPermission() {
    if (!this.platform.is('android'))
     return;

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => {
        console.log('Has permission?', result.hasPermission);
       // this.toast.presentToastBottom('Permission alredy granted', 'dark');
        this.writePermission = true;
      },
      err => {
        this.writePermission = false;
       // this.toast.presentToastBottom('Permission not granted', 'danger');
        console.log('No permission granted', err);
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      });
  }

  switchTo(val) {
    this.orderTabs = val;
    this.refreshList(this.user);
  }

myFunction() {
  //let kip=  

  return {
    name: 'Bob'
  };

}
orderformat(order){
  console.log("Format Order");
  if (order.length > 10) {
            var trucatedText = order.substr(0, 10) + '...';
      console.log(trucatedText);
      //this.imageName=trucatedText;
      return trucatedText;
       }
       else{
        
        return order;
       }
}


  async open(fileName, url, order) {
     this.loading.presentLoading();
    if (!this.platform.is('cordova')) {
       window.open(url);
      // const modal = await this.modalCtrl.create({
      //   component: ImagePreviewPage,
      //   cssClass: 'image-preview',
      //   showBackdrop: true,
      //   componentProps: { url }
      // });
      // modal.present();
      // return;
  this.loading.dismissLoading();
    };

      // const modal = await this.modalCtrl.create({
      //   component: ImagePreviewPage,
      //   cssClass: 'image-preview',
      //   showBackdrop: true,
      //   componentProps: { url }
      // });
      // modal.present();
      // return;
    //if (this.writePermission) {
     

      let path_ext;
      if (this.platform.is('android')) {
        path_ext = this.file.dataDirectory + 'SnapToVector/Images/';
       // path_ext = this.file.dataDirectory + '/';
      } else {
        path_ext = this.file.documentsDirectory+ 'SnapToVector/Images/';
         //path_ext = this.file.documentsDirectory;
      }
 
      const ext = fileName.substr(fileName.lastIndexOf('.'));
      const filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
      let file_Name=filenameNoExt + '-' + order.id + ext;

      console.log("Checking file");
      this.file.checkFile(path_ext, filenameNoExt + '-' + order.id + ext).then(d => {
        console.log("Checked file");
        console.log(d);

        this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + order.id + ext).then((response: any) => {
        // this.file.resolveLocalFilesystemUrl(this.file.dataDirectory+ 'SnapToVector/Images/').then((response: any) => {
       
          response.file(meta => {
            console.log("Resolving  file system");
            console.log(meta);
            this.loading.dismissLoading();
            this.fileOpener.open(meta.localURL, meta.type)
              .then((d) => {
                 console.log("Yes");
                console.log(d);
              })
              .catch(e => {
                 console.log("No");
                console.log(e);
              });
          });
        })

      }).catch(err => {
        console.log("There was an error");
        console.log(err);
        let img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        if (this.platform.is('android')) {
          img_path = this.file.cacheDirectory + '/'
          //img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        } else {
           img_path = this.file.tempDirectory + '/'
         // img_path = this.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
        }
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // fileTransfer.download(url, img_path).then((entry) => {
      this.http.get(url, {responseType: 'blob'}).subscribe((data: Blob) => {
           this.file.writeFile(img_path, file_Name, data, { replace: true })
        .then((fileEntry) => {
           console.log("Yes fileEntry");
          console.log(fileEntry);
          console.log(fileEntry.nativeURL);

          this.file.resolveLocalFilesystemUrl(fileEntry.nativeURL).then((response: any) => {
            response.file(meta => {
              console.log(meta);
              this.loading.dismissLoading();
              this.fileOpener.open(meta.localURL, meta.type)
                .then((d) => {
                  console.log(d);
                })
                .catch(e => {
                  console.log(e);
                });
            });
          }, (err) => {
            this.loading.dismissLoading();
            console.log("error 3");
            console.log(err);
          })
        }, (error) => {

          this.loading.dismissLoading();
          this.toast.presentToastBottom('Error downloading image, Please try again.', 'danger');
        });

      });

      });
    // } else {


    //   this.loading.presentLoading()
    //   let img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + fileName;
    //   if (this.platform.is('android')) {
    //     img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + fileName;
    //   } else {
    //     img_path = this.file.tempDirectory + fileName;
    //   }
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   fileTransfer.download(url, img_path).then((entry) => {
    //     console.log(entry);

    //     this.file.resolveLocalFilesystemUrl(entry.nativeURL).then((response: any) => {
    //       response.file(meta => {
    //         console.log(meta);
    //         this.loading.dismissLoading();
    //         this.fileOpener.open(meta.localURL, meta.type)
    //           .then((d) => {
    //             console.log(d);
    //           })
    //           .catch(e => {
    //             console.log(e);
    //           });
    //       });
    //     }, (err) => {
    //       this.loading.dismissLoading();
    //       console.log(err);
    //     })
    //   }, (error) => {

    //     this.loading.dismissLoading();
    //     this.toast.presentToastBottom('Error downloading image, Please try again.', 'danger')

    //   });
    // }
  }

  share(fileName, url,order) {

     this.loading.presentLoading()
      console.log(this.file.dataDirectory);
      let path_ext;
      if (this.platform.is('android')) {
      //  path_ext = this.file.dataDirectory + 'SnapToVector/Images/';
        path_ext = this.file.dataDirectory + '/';


      } else {
        path_ext = this.file.documentsDirectory+ '/';
      }
 
      const ext = fileName.substr(fileName.lastIndexOf('.'));
      const filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
      let file_Name=filenameNoExt + '-' + order.id + ext;

      console.log("Checking file");
      this.file.checkFile(path_ext, filenameNoExt + '-' + order.id + ext).then(d => {
        console.log("Checked file");
        console.log(d);

        //this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + order.id + ext).then((response: any) => {
        this.file.resolveLocalFilesystemUrl(this.file.dataDirectory+ 'SnapToVector/Images/').then((response: any) => {
       
          response.file(meta => {
            console.log("Resolving  file system");
            console.log(meta);
            this.loading.dismissLoading();
            // this.fileOpener.open(meta.localURL, meta.type)
            //   .then((d) => {
            //     console.log(d);
            //   })
            //   .catch(e => {
            //     console.log(e);
            //   });

            // console.log(url);
                 let text = 'Check out the order #'+order.id ;
                 //let theurl = url;
              //  this.loading.presentLoading();
                //share(message, subject, file, url)
    

                 this.socialSharing.share(null, null,path_ext + filenameNoExt + '-' + order.id + ext , null).then(res => {
              //  this.socialSharing.share(text, null,meta.localURL , url).then(res => {
                   console.log(res);
                  this.loading.dismissLoading();
                }).catch(err => {
                    console.log(err);
                  this.loading.dismissLoading();
                });
          });
        })

      }).catch(err => {
        console.log(err);
        let img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        if (this.platform.is('android')) {
            img_path = this.file.cacheDirectory + '/';

         // img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
           
        } else {
           img_path = this.file.tempDirectory+ '/';
          //img_path = this.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
        }
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // fileTransfer.download(url, img_path).then((entry) => {
        //    this.http.get(url, {responseType: 'blob'}).subscribe((data: Blob) => {
        //    this.file.writeFile(this.file.dataDirectory, file_Name, data, { replace: true })
        // .then((fileEntry) => {
        //    console.log("Yes fileEntry");
      this.http.get(url, {responseType: 'blob'}).subscribe((data: Blob) => {
           this.file.writeFile(this.file.dataDirectory, file_Name, data, { replace: true })
        .then((fileEntry) => {
          console.log(fileEntry);

          this.file.resolveLocalFilesystemUrl(fileEntry.nativeURL).then((response: any) => {
            response.file(meta => {
              console.log(meta);
              console.log(meta.localURL);
              this.loading.dismissLoading();
              // this.fileOpener.open(meta.localURL, meta.type)
              //   .then((d) => {
              //     console.log(d);
              //   })
              //   .catch(e => {
              //     console.log(e);
              //   });

      //now share the file

                              console.log(url);
                 let text = 'Check out the order #'+order.id;
                 //let theurl = url;
              //  this.loading.presentLoading();
                //share(message, subject, file, url)
          

                 this.socialSharing.share(text, null,path_ext + filenameNoExt + '-' + order.id + ext ,null).then(res => {
              //  this.socialSharing.share(text, null,meta.localURL , url).then(res => {
                   console.log(res);
                  this.loading.dismissLoading();
                }).catch(err => {
                    console.log(err);
                  this.loading.dismissLoading();
                });
              



            });
          }, (err) => {
            this.loading.dismissLoading();
            console.log("error 3");
            console.log(err);
          })
        }, (error) => {

          this.loading.dismissLoading();
          this.toast.presentToastBottom('Error sharing image, Please try again.', 'danger');
        });

      });

      });

  
  }

  orderViewed(type) {
    if (type === 'attentionRequired') {
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

    } else if (type === 'completed') {
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

  showDownloadAlert(path, filename,url, order) {
    console.log(path.substr(8));
    this.alert.newAlert('File Downloaded', 'Location : ' + path,
      [
        {
          text: 'OK',
        },
        {
          text: 'Open',
          handler: () => {
            this.open(filename, '', order);
             //this.open(filename,url, order);
          }
        }
      ]
    );
  }


  get isCordova() {
    return this.platform.is('cordova');
  }

}
