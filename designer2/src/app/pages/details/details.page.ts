import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, Platform } from '@ionic/angular';
import { AlertService } from 'src/app/providers/alert.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import * as firebase from 'firebase/app';
import { DataService } from 'src/app/providers/data.service';
import { ToastService } from 'src/app/providers/toast.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @Input() order: any;
  @ViewChild('uploadFile') uploadFile: any;

  sendNotificationBtn: boolean;
  deliverOrderBtn: boolean;
  rejectRevisionBtn: boolean;
  filesToUpload: any[] = [];
  filesReady: any[] = [];
  sendNotificationSelected: boolean;
  deliverOrder: boolean=false;
  notifications = [
    'Your order is now in progress',
    'Your order will be ready to be delivered in 24hours',
    'Your order is ready to be delivered',
    'Your order is stopped due to some reasons'
  ];
  selectedNotficationMsg: string;

  constructor(
    private modalCtrl: ModalController,
    private alerService: AlertService,
    private fileChooser: FileChooser,
    private platform: Platform,
    private dataService: DataService,
    private toastService: ToastService,
    private file: File,
    private http:HttpClient,
    private ft: FileTransfer
  ) { }

  ngOnInit() {
    if (
      !this.order.delivered &&
      !this.order.accepted &&
      !this.order.revisionRequested) {
      this.sendNotificationBtn = true;
      this.deliverOrderBtn = true;
      this.rejectRevisionBtn = false;
    } else if (!!this.order.accepted) {
      this.sendNotificationBtn = false;
      this.deliverOrderBtn = false;
      this.rejectRevisionBtn = false;
    } else if (
      !!this.order.delivered &&
      !this.order.accepted) {
      this.sendNotificationBtn = false;
      this.deliverOrderBtn = false;
      this.rejectRevisionBtn = false;
    } else if (
      !this.order.delivered &&
      !this.order.accepted &&
      !!this.order.revisionRequested &&
      !this.order.requireSpecialAction) {
      this.sendNotificationBtn = false;
      this.deliverOrderBtn = true;
      this.rejectRevisionBtn = true;
    }
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files;
    this.alerService.presentAlertConfirm('Confirm upload', 'Countinue with upload?',
      'Continue', this.upload(),"");
  }

  upload() {
    if (this.filesToUpload.length <= 0) {
      this.toastService.presentToast('Select images to Upload', 'primary');
    } else {
       console.log(this.filesToUpload);
      for (let i = 0; i < this.filesToUpload.length; i++) {
         console.log(this.filesToUpload[i]);
        const storeName = Date.now() + '-' + this.filesToUpload[i].name
        const storageRef = firebase.storage().ref('designer_files/' + storeName);

        const task = storageRef.put(this.filesToUpload[i]);

        task.on('state_changed',
          function progress(snapshot) {

          },
          function error(err) {

          },
          () => {
            const downloadURL = task.snapshot.downloadURL;
            this.filesReady.push({
              filename: storeName,
              originalname: this.filesToUpload[i].name,
              created: Date.now(),
              url: downloadURL,
              order: this.order.id
            })
             console.log("delivering");
              console.log(this.filesReady);

            if (i === this.filesToUpload.length - 1) {
              console.log("delivering");
              this.dataService.postImages(this.filesReady).subscribe(data => {
                console.log(data);
                this.filesToUpload=[];
                console.log( this.filesToUpload);
                this.toastService.presentToast('Order Delivered', 'success');
              }, err => {
                 this.filesToUpload=[];
                this.toastService.presentToast('Upload Failed', 'danger');
              })
            }
          }
        );
      }
    }
  }
 public browsePhoto(event: EventTarget): void { 
  this.deliverOrder=true;
    const upfiles = this.takePhoto(event);
     console.log(upfiles);
     for (var i = 0; i < upfiles.length; i++) {
     let file= upfiles[i];
     this.filesToUpload.push(file);
      }
     
       console.log(this.filesToUpload);
       this.delivermyOrder();
   // let fileType = file.type;
    // for (var i = 0; i < upfiles.length; i++) {
    //  let file= upfiles[i];
    
    // const fileReader: FileReader = new FileReader();
    // fileReader.onload = (secondEvent: any) => {
    //    console.log(secondEvent);
    //   let res=secondEvent.target.result;
    //    console.log(secondEvent.target.result);
    //     //console.log(file.name);
    //   let myFile = secondEvent.target.result;
    //   // this.filesToUpload.push(myFile);
    //   //console.log(this.filesToUpload);
    //   //this.content.scrollToBottom();
    //     console.log("generated string"+this.stringGen(5));
    //    //let date=new Date().toISOString();
    //    let newName=this.stringGen(5);
    //   //this.newName = file.name;
    //   let imageName=file.name;
    //    const ext = file.name.substr(file.name.lastIndexOf('.'));
    //   this.fileName=newName+ext;
    //   console.log('originalFile: ', file.name);
    // // let isimage= fileType.indexOf('image') !== -1;
    //  //console.log(isimage);
    // };


    // fileReader.readAsDataURL(file);
    // setTimeout(() => {
    // }, 1000);
//}

  }
  stringGen(len) {
  var text = "";
  
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  
  return text;
}
   takePhoto(event: EventTarget) {
    console.log(event);
    const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files = target.files;
    console.log(files);
  //  const f = files;
    if (files) {
      return files;
    } else {
      return null;
    }
  }



  async pickImage() {
    try {
      const cameraInfo = await this.fileChooser.open();
      this.filesToUpload.push(await this.makeFileIntoBlob(cameraInfo));
      const uploadInfo: any = await this.upload();

      this.toastService.presentToast('File Upload Success ' + uploadInfo.fileName, 'success');
    } catch (e) {
      console.log(e.message);
      this.toastService.presentToast('File Upload Error ' + e.message, 'danger');

    }
  }

  // FILE STUFF
  makeFileIntoBlob(imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = '';
      this.file
        .resolveLocalFilesystemUrl(imagePath)
        .then(fileEntry => {
          const { name, nativeURL } = fileEntry;

          // get the path..
          const path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
          console.log('path', path);
          console.log('fileName', name);

          fileName = name;

          // we are provided the name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          const imgBlob = new Blob([buffer], {
            type: 'image/jpeg'
          });
          console.log(imgBlob.type, imgBlob.size);
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }



  delivermyOrder() {
    const deliverOrderContinue = () => {
     
       this.upload();

       console.log("yes");
      
    };
      const deliverOrderCancel = () => {
     
       this.filesToUpload=[];
       console.log(this.filesToUpload);

       console.log("no");
      
    };
    this.alerService.presentAlertConfirm('Deliver Order', 'files to upload selected successfully, deliver order?',
      'Continue', deliverOrderContinue,deliverOrderCancel);
  }

  sendNotification() {
    const sendNotificationContinue = () => {
      if (this.selectedNotficationMsg) {
        const notificationObj: any = {};
        notificationObj.description = this.selectedNotficationMsg;
        notificationObj.orderId = this.order.id;
        this.sendNotificationSelected = false;
        this.dataService.sendNotification(notificationObj,this.order.id).subscribe(data => {
          this.toastService.presentToast('Notification Sent', 'primary');
        }, err => {
          console.log(err);
        })
      }
    }
    this.alerService.presentAlertConfirm('Send notification', `Send '${this.selectedNotficationMsg}' to user`,
      'Continue', sendNotificationContinue,"");
  }

    convertBase64ToBlobData(base64Data: string, contentType: string='image/png', sliceSize=512) {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  downloadFile(images: any[] | any) {
    console.log(images);
    // if (this.platform.is('cordova')) {
    //   if (Array.isArray(images)) {
    //     images.map((image: any) => {
    //       const path = this.file.dataDirectory;
    //       const transfer = this.ft.create();

    //       transfer.download(image.url, path + image.originalName).then(entry => {
    //         const url = entry.toURL();
    //       }).catch((e) => {
    //         console.log(`Tranfer plugin failed ${e}`)
    //       })
    //     })
    //   } else {
    //     const path = this.file.dataDirectory;
    //     const transfer = this.ft.create();

    //     transfer.download(images.url, path + images.originalName).then(entry => {
    //       const url = entry.toURL();
    //     }).catch((e) => {
    //       console.log(`Tranfer plugin failed ${e}`)
    //     })
    //   }
    // } else {
       images.map((image: any) => {
          console.log(image);
       // const blobData = this.convertBase64ToBlobData(image.url);
         //  console.log(blobData);
         // Create a reference with an initial file path and name
  //        let storage = firebase.storage();
//          var httpsReference = storage.refFromURL(image.url);
          // This can be downloaded directly:
          // var xhr = new this.http();
          // xhr.responseType = 'blob';
          // xhr.onload = function(event) {
          //   var blob = xhr.response;
          // };
          // xhr.open('GET', image.url);
          // xhr.send();

         this.getImage(image.url).subscribe((res)=>{
         // return res;
          console.log(res);
            if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
      window.navigator.msSaveOrOpenBlob(res, image.originalname);
    } else { // chrome
      const blob = res;
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = image.originalname;
      link.click();
    }

         // this.http.send(res);
         });
        // console.log(img);
    });
  
 

     //  window.URL.createObjectURL(image.url);
       // window.open(image.url);
   // }
  }
 getImage(imageUrl: string) {
        return this.http.get(imageUrl, {  responseType: 'blob' });
           // .map((res: Response) => res.blob());
    }
  rejectRevision() {
    this.dataService.revisionReject(this.order).subscribe(data => {
      this.toastService.presentToast('Revision Request, No Administration will handle this order', 'primary');
    }, err => {
      this.toastService.presentToast('Rejection failed, try again', 'success');
    })
  }


}
