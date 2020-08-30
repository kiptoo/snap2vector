import { Component, OnInit, Input } from '@angular/core';
import { NavController, IonContent, ModalController,Platform } from '@ionic/angular';
import { UserProvider } from 'src/app/providers/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AlertService } from 'src/app/providers/alert.service';
import { LoadingService } from 'src/app/providers/loading.service';
import { ToastService } from 'src/app/providers/toast.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { OrderProvider } from 'src/app/providers/order';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.page.html',
  styleUrls: ['./image-preview.page.scss'],
})
export class ImagePreviewPage implements OnInit {
 vectors:any
   writePermission = false;
  @Input("order") order;
  constructor(
    private modalCtrl: ModalController,
    private navCtrl:NavController,
  private afAuth: AngularFireAuth,
  private platform:Platform,
 private user:UserProvider,
private socialSharing: SocialSharing,
 private orderService: OrderProvider,
   private alert: AlertService,
    private loading: LoadingService,
    private toast: ToastService,
    private http: HttpClient,
    private transfer: FileTransfer,
    private androidPermissions: AndroidPermissions,
    private file: File,
    private fileOpener: FileOpener,
  ) {
 this.loading.presentLoading();
 this.afAuth.authState.subscribe((res) => {
      console.log(res);
      console.log(this.order);
      if (res!=null) {
      console.log("user id:"+res.uid);
      console.log(this.order);
       
   //  this.userid=res.uid;
  this.user.getvector(this.order.id).subscribe((msg)=>{
      console.log(msg);
     this.loading.dismissLoading();
       // let data=msg[0];
       // console.log(data.);
      // console.log(data.body);
    this.vectors=msg;
    });
      }
      else{
        this.loading.dismissLoading();
        //this.navCtrl.navigateRoot('/login');
      }
    },(err)=>{
      console.log(err);
      this.loading.dismissLoading();
       //this.toast.presentToast('unable to find logged in user','danger');
  
    }); 


   }

  @Input() url: any;

  ngOnInit() {

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
      //   this.toast.presentToast('Permission not granted', 'danger');
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
        img_path = this.file.dataDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
      } else {
        img_path = this.file.documentsDirectory + filenameNoExt + '-' + order.id + ext;
      }
      console.log("image path"+img_path);
        console.log(this.file.dataDirectory); 
        this.file.writeFile(this.file.dataDirectory, file_Name, data, { replace: true })
        .then((fileEntry) => {
        this.toast.presentToastBottom('File saved successfully', 'dark');
        console.log(fileEntry);
        console.log('write successful');
        this.loading.dismissLoading();
       this.showDownloadAlert(this.file.dataDirectory, fileName,url, order);
        
        })
        .catch(error => {
        console.log(error);
         this.toast.presentToastBottom('Error Downloading File,please try again', 'danger');
        this.loading.dismissLoading();
        });
        },error => {
        console.log(error);
         this.toast.presentToastBottom('Error Downloading File,please try again', 'danger');
        this.loading.dismissLoading();
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
    async open(fileName, url, order) {
    if (!this.platform.is('cordova')) {
      const modal = await this.modalCtrl.create({
        component: ImagePreviewPage,
        cssClass: 'image-preview',
        showBackdrop: true,
        componentProps: { url }
      });
      modal.present();
      return;
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
      this.loading.presentLoading()

      let path_ext;
      if (this.platform.is('android')) {
        //path_ext = this.file.dataDirectory + 'SnapToVector/Images/';
        path_ext = this.file.dataDirectory + '/';
      } else {
        path_ext = this.file.documentsDirectory;
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
          img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        } else {
          img_path = this.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
        }
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // fileTransfer.download(url, img_path).then((entry) => {
      this.http.get(url, {responseType: 'blob'}).subscribe((data: Blob) => {
           this.file.writeFile(this.file.dataDirectory, file_Name, data, { replace: true })
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

        this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + order.id + ext).then((response: any) => {
       //  this.file.resolveLocalFilesystemUrl(this.file.dataDirectory+ 'SnapToVector/Images/').then((response: any) => {
       
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
          img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
           
        } else {
          img_path = this.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
        }
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // fileTransfer.download(url, img_path).then((entry) => {
      this.http.get(url, {responseType: 'blob'}).subscribe((data: Blob) => {
           this.file.writeFile(img_path, file_Name, data, { replace: true })
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
           // this.open(filename, '', order);
            this.open(filename,url, order);
          }
        }
      ]
    );
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


  dismiss() {
    this.modalCtrl.dismiss();
  }
   get isCordova() {
    return this.platform.is('cordova');
  }

}
