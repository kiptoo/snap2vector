import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PopoverController, NavController, ActionSheetController, Platform,IonContent, ModalController,NavParams } from '@ionic/angular';
import { ToastService } from 'src/app/providers/toast.service';
import { LoadingService } from 'src/app/providers/loading.service';
import { Crop } from '@ionic-native/crop/ngx';
import { DataService } from 'src/app/providers/data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ImageProvider } from 'src/app/providers/image';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { File } from '@ionic-native/file/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-revision-image',
  templateUrl: './revision-image.page.html',
  styleUrls: ['./revision-image.page.scss'],
})
export class RevisionImagePage implements OnInit {
 @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  @ViewChild('inpName') inpName;
   @ViewChild(IonContent) content: IonContent;
  instructions = '';
  originalImage: any;
  previousImages: any = [];
  //image: any;
  userObj: any = {};
  //newName: any = '';
  //imageName: any = '';

cropperOptions:any;
croppedImage = null;
pack:any;
croped:any=false;
saved :any=false;
  fileType: string;
  newName = '';
  Ext= '';
  fileName = '';
  myFile: any;
  showAlert = true;
  imageName: any = '';
  image: any;
  exists : String;
  isimage :boolean;

cropInstance:any;
imgCroppedUrl:any;
  originalFile: any;
  previousFiles: any[] = [];
  buttonClicked: boolean=false;
   imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };


//  buttonClicked: boolean;

  @Input() orderObj: any;

  // ngOnInit() {
  // }


  constructor(
    public nav: NavController,
    private datePipe: DatePipe,
    public popoverCtrl: PopoverController,
  private navParams: NavParams,
      private dataService: DataService,
          private afAuth: AngularFireAuth,
    private actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public toast: ToastService,
    public platform: Platform,
    public loading: LoadingService,
    private crop: Crop,
    public file: File,
    private imageService: ImageProvider,
    private modalCtrl: ModalController
  ) { 

 this.cropperOptions = {
      dragMode: 'crop',
      //aspectRatio: 1,
      aspectRatio: NaN,
      autoCrop: true,
      movable: false,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
    //  cropController.keepingCropAspectRatio = YES;
      responsive: true,
       modal: true,
       guides: true,
       center: true,
        highlight: true,
        background: true,
        cropBoxMovable: true,
          cropBoxResizable: true,
         toggleDragModeOnDblclick: true,
    };
    console.log(this.orderObj);
   // console.log(this.navParams.data.data);
   // this.pack = this.navParams.data.data;

  }

  ngOnInit() {
    //this.exists = this.fileType.some(o => o.image === data.image);
    //this.checkexists();
   //this.croppr();
  }
// checkexists(){
//   this.exists = this.fileType.some(o => o.image === data.image);
//   return this.exists; 

// }

  get isCordova() {
    return this.platform.is('cordova');
  }
  cropperTouchStart(event){
    event.stopPropagation();
    event.preventDefault(); //Most important
  }
  // croppr(){
  //      this.cropInstance = new Croppr('#croppr', {
  //         // options
  //          // custom aspect radio
  //   // e.g.
  //   aspectRatio: null,

  //   // min/max sizes
  //   maxSize: { width: null, height: null },
  //   minSize: { width: null, height: null },

  //   // start size of crop region
  //   startSize: { width: 100, height: 100, unit: '%' },

  //   // real", "ratio" or "raw"
  //   returnMode: 'real',

  //   // callback functions
  //   onInitialize: null,
  //   onUpdate: null
  //       });  
  //   }
  //   cropprGetVal(){
  //     var newSrc
  //     var data:any = []
  //     data = this.cropInstance.getValue();
  //     let x = data.x
  //     let y = data.y
  //     let width = data.width
  //     let height = data.height
     
  //     var img = new Image();
  //     img.src = this.myFile;
  //     var canvas = document.createElement('canvas');
  //     var ctx = canvas.getContext('2d');
  //     canvas.width=width
  //     canvas.height=height
  //     ctx.drawImage(img, x, y, width, height, 0, 0, width, height); 
  //     console.log(canvas.toDataURL("image/jpeg"))
  //     this.imgCroppedUrl = canvas.toDataURL("image/jpeg")
  //   }

  async presentActionSheet() {
    if (this.platform.is('cordova')) {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Select file source',
        buttons: [
          {
            text: 'Upload from Gallery',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: 'Use Camera',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();
    }
  }

  //  reset() {
  //   this.angularCropper.cropper.reset();
  //    this.saved=false;
  // }
 
  clear() {
   // this.angularCropper.cropper.clear();
    // this.angularCropper.cropper.reset();
      this.angularCropper.cropper.reset();
     this.saved=false;
   //  this.angularCropper.cropper.reset();
    // this.crop=false;
    //this.angularCropper.cropper.reset();
    // this.saved=false;
  }
  //  clear() {
  //   this.angularCropper.cropper.clear();

  //   this.closeModal(); 
  // }
  docrop() {
    this.croped=true;
  }
   save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    console.log(croppedImgB64String);
    this.previousFiles.push(this.myFile);
    this.saved=false;
    this.croped=false;
    this.myFile = croppedImgB64String;
  }
  // async opencrop(){
  //       const cropModal = await this.modalCtrl.create({
  //     component: CropModalPage,
  //       componentProps: {
  //       "url": this.myFile,
  //      // "paramTitle": "Test Title"
  //     }
  //   });
  //   cropModal.onDidDismiss()
  //     .then((data: any) => {
  //       console.table(data);

  //       if (data.data!=undefined) {
  //        // console.log(data.data.croppedimage);
  //        this.myFile = data.data.croppedimage;
  //        this.previousFiles =data.data.previous;
  //         //console.log(this.myFile);
  //         //this.isCardAvaliable = true;
  //       }
  //     });
  //   cropModal.present();
  // }

  public fromcamera(){
//     let   options = {
//         quality: 100,
//         sourceType:this.camera.PictureSourceType.CAMERA,
//         destinationType: this.camera.DestinationType.DATA_URL,
//         //destinationType: this.camera.DestinationType.FILE_URI,
//         encodingType: this.camera.EncodingType.JPEG,
//         mediaType: this.camera.MediaType.PICTURE,
//         correctOrientation: true,
//         saveToPhotoAlbum: false
//       };
// this.camera.getPicture(options).then((filePath) => {
//       console.log(filePath);
//       this.fileType=filePath.type;
//       let win: any = window;
    
//        this.myFile=win.Ionic.WebView.convertFileSrc(filePath);
//         console.log("File path"+this.myFile)

//     }).catch((e)=>{
//       console.log(e);
//       alert("Error"+e);

//     });

    this.takePicture(this.camera.PictureSourceType.CAMERA);

  }
   public mobileupload(){

    // let options: ImagePickerOptions ={
    //   //title:'select picture',
    //   //message:'select atleast 1 picture',
    //   maximumImagesCount:1,
    //   outputType:0 //0=path 1=base64
    //   };
    //   this.imagePicker.getPictures(options).then((results) => {
    //   for (var i = 0; i < results.length; i++) {
    //     //this.cropImage(results[i]);
    //     let newfile=results[i];
    //      let win: any = window;
    
    //    this.myFile=win.Ionic.WebView.convertFileSrc(newfile);
    //     //this.showCroppedImage(this.myFile)
    //   //  this.cropImage();
    //   }
    // }, (err) => {
    //   alert(err);
    // });



    

   this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);

  }
   newcropImage() {
    this.crop.crop(this.myFile, { quality: 100 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          console.log(error);
       this.loading.dismissLoading();
          this.toast.presentToast('Error cropping image', 'danger');
         // alert('Error cropping image');
        }
      );
  }

   showCroppedImage(ImagePath){
    console.log(ImagePath);
   // this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length-1];
    this.imageName=imageName;
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath,imageName).then(base64=>{
       this.isimage= base64.indexOf('image') !== -1;
        this.myFile = base64;

     //   this.isLoading = false;
    },error=>{
      this.loading.dismissLoading();
      console.log(error);
         this.toast.presentToast('Error in showing image', 'danger');
      //alert('Error in showing image' + error);
    //  this.isLoading = false;
    });
  }

  public browsePhoto(event: EventTarget): void { 
    const file = this.imageService.takePhoto(event);
    this.fileType = file.type;
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (secondEvent: any) => {
      //console.log(secondEvent);
      let res=secondEvent.target.result;
       console.log(secondEvent.target.result);
        //console.log(file.name);
      this.myFile = secondEvent.target.result;
      this.content.scrollToBottom();

      //this.newName = file.name;

        console.log("generated string"+this.stringGen(5));
       //let date=new Date().toISOString();
      // let date = new Date().valueOf();
        var date = this.datePipe.transform(new Date(),"MM-dd-yyyy hh-mm");
       //this.newName=this.stringGen(5);
         console.log(date.toString().slice(0, 10));
         this.newName=date;
       // this.newName=date.toString().slice(0, 10);
    //   console.log(date.toString());
      //  this.newName=date.toString();
     //  this.newName=this.stringGen(5);
      //this.newName = file.name;
      this.imageName=file.name;
       const ext = file.name.substr(file.name.lastIndexOf('.'));
       this.Ext=ext;
      this.fileName=this.newName+ext;

      console.log('originalFile: ', file.name);
     this.isimage= this.fileType.indexOf('image') !== -1;
     console.log(this.isimage);
    };


    fileReader.readAsDataURL(file);
    setTimeout(() => {
    }, 1000);


  }

   get mobile() {
    return this.platform.is('cordova');
  }

 async  takePicture(sourceType) {

    let options: CameraOptions = {};
    if (sourceType === this.camera.PictureSourceType.CAMERA) {
      options = {
        quality: 100,
        sourceType:sourceType,
        destinationType: this.camera.DestinationType.FILE_URI,
        //destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        saveToPhotoAlbum: false
      };

    } else {
      options = {
        quality: 100,
        sourceType:sourceType,
        destinationType: this.camera.DestinationType.FILE_URI,
        //destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        saveToPhotoAlbum: false
      };
    }

try {
// this.camera.getPicture(options).then((imageData) => {
//       let base64Image = 'data:image/jpeg;base64,' + imageData;
//        this.originalFile = base64Image;
//        this.myFile = base64Image;
//     }, (err) => {
//       // Handle error
//     });
    this.camera.getPicture(options).then((filePath) => {
      console.log(filePath);
      const fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
      this.fileName = fileName.substr(0, fileName.lastIndexOf('?'));
      this.originalFile= filePath;
       this.fileName = fileName.split('?')[0];
       console.log(this.fileName);

       console.log("generated string"+this.stringGen(5));
       //let date=new Date().toISOString();
      // let date = new Date().valueOf();
       var date = this.datePipe.transform(new Date(),"MM-dd-yyyy hh-mm");
       // this.newName=this.stringGen(5);
       // console.log(date.toString());
       //this.newName=date.toString().slice(0, 10);
       this.newName=date;

       console.log(date.toString());
        //this.newName=date.toString();
       const ext = this.fileName.substr(this.fileName.lastIndexOf('.'));
          this.Ext=ext;
      this.fileName = this.newName + ext;

       this.showCroppedImage(filePath.split('?')[0]);

     // this.fileType=filePath.type;
      
    //  this.cropImage(filePath);
                    
       //let win: any = window;
    
       //this.myFile=win.Ionic.WebView.convertFileSrc(filePath);

     //  let base64Image = 'data:image/jpeg;base64,' + filePath;
     //  //console.log(this.myFile);
     //   this.isimage= base64Image.indexOf('image') !== -1;
     //   console.log(this.isimage);
     //  this.originalFile = base64Image;
     // // this.originalFile= win.Ionic.WebView.convertFileSrc(filePath);
     //  this.myFile = base64Image;
     //  const fileName = base64Image.substr(base64Image.lastIndexOf('/') + 1);
     //  if (sourceType === this.camera.PictureSourceType.CAMERA) {
     //    this.fileName = fileName;
     //  } else {
     //    this.fileName = fileName.substr(0, fileName.lastIndexOf('?'));
     //  }
     //  console.log(this.myFile);
    }, err => {
      this.loading.dismissLoading();
      this.toast.presentToast('File Upload Error', 'danger');
      console.log(err);
    });

      // let cameraInfo = await this.camera.getPicture(options);
      // let blobInfo = await this.makeFileIntoBlob(cameraInfo);
      //  console.log(cameraInfo);
      // console.log(blobInfo);
      // //let uploadInfo: any = await this.uploadToFirebase(blobInfo);
      //  this.afAuth.authState.subscribe((user) => {
      //   console.log(user);
      // //  const req = this.imageService.uploadToGallery(this.myFile, user.uid, this.newName);
  
      //     this.uploadToFirebase(blobInfo,user.uid).then((data: any) => {
      //       console.log(data);
      //       this.storage.set('IMAGE', data);
      //       this.modalCtrl.dismiss();
      //       this.openModal(CheckoutPage).then(() => {
      //         this.loading.dismissLoading();
      //       }).catch(() => {
      //         this.loading.dismissLoading();
      //       });
      //     });

      // });

     // this.originalFile = blobInfo;
     // this.myFile = blobInfo;

   //   alert("File Upload Success " + uploadInfo.fileName);
    } catch (e) {
      console.log(e.message);
          this.toast.presentToast('File Upload Error', 'danger');

      //alert("File Upload Error " + e.message);
    }

    // this.camera.getPicture(options).then((filePath) => {
    //   let base64Image = 'data:image/jpeg;base64,' + filePath;
    //   this.originalFile = base64Image;
    //   this.myFile = base64Image;
    //   const fileName = base64Image.substr(base64Image.lastIndexOf('/') + 1);
    //   if (sourceType === this.camera.PictureSourceType.CAMERA) {
    //     this.fileName = fileName;
    //   } else {
    //     this.fileName = fileName.substr(0, fileName.lastIndexOf('?'));
    //   }
    //   console.log(this.myFile);
    // }, err => {
    //   console.log(err);
    // });
  }
stringGen(len) {
  var text = "";
  
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  
  return text;
}
   uploadToFirebase(_imageBlobInfo,userId) {
    console.log("uploadToFirebase");
    console.log(_imageBlobInfo);
   // storageRef: firebase.storage.Reference,
    let fileName=_imageBlobInfo.fileName;
    return new Promise((resolve, reject) => {
       let fileRef =  firebase.storage().ref('user_files/' + +Date.now() + _imageBlobInfo.fileName);
      //let fileRef = firebase.storage().ref("images/" + _imageBlobInfo.fileName);

      let uploadTask = fileRef.put(_imageBlobInfo.imgBlob);

      uploadTask.on(
        "state_changed",
        (_snapshot: any) => {
          console.log(
            "snapshot progess " +
              (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100
          );
        },
        _error => {
          console.log(_error);
          reject(_error);
        },
        () => {
           console.log("upload Success");
          fileRef.getDownloadURL().then((url) => {
            let myFile = {
              filename: fileName,
              originalname: fileName.split('.')[0],
              url,
              user: userId
            };
            this.dataService.postRequest(`image/`, myFile)
              .subscribe((res) => {
                console.log(res);
                resolve(res);
              }, (err) => {
                console.log(err);
                resolve(null);
              })
          })
          // completion...
         // resolve(uploadTask.snapshot);

        }
      );
    });
  }

  // FILE STUFF
  makeFileIntoBlob(_imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = "";
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;

          // get the path..
          let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
          console.log("path", path);
          console.log("fileName", name);

          fileName = name;

          // we are provided the name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          let imgBlob = new Blob([buffer], {
            type: "image/jpeg"
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
    sendRequest() {
    this.loading.presentLoading();
    this.orderObj.instructions = this.instructions;
    console.log(this.orderObj);
    // this.imageService.requestRevision(this.orderObj, this.myFile).then((data: any) => {
    //   console.log(data);
    //   this.loading.dismissLoading();
    //   this.toast.presentToast('Revision Request Sent.', 'dark');

    //   this.nav.navigateRoot('/menu/tabs/tabs/home');
    // });
        this.imageService.uploadToGallery(this.myFile,this.orderObj.user, this.fileName).then((data: any) => {
      console.log(data);
      this.orderObj.newimage=data;
       this.dataService.postRequest(`orders/revision/`, this.orderObj)
              .subscribe((res) => {
                console.log(res);
        this.loading.dismissLoading();
        this.dismiss();
      this.toast.presentToast('Revision Request Sent.', 'dark');

      this.nav.navigateRoot('/menu/tabs/tabs/home');

              },err=>{
                this.dismiss();

              this.toast.presentToast('Revision Request not Sent.', 'danger');

      this.nav.navigateRoot('/menu/tabs/tabs/home');

              });
      
    });
  }
  dismiss(){
    this.modalCtrl.dismiss();
  }
  saveImage() {
    console.log(this.myFile);
    //let base64Image = 'data:image/jpeg;base64,' + this.myFile;
    this.loading.presentLoading();
    // this.updateFileName().then(() => {
     this.dataService.isOnline(); 
     if(this.dataService.isOnline()){
      this.afAuth.authState.subscribe((user) => {
  //        (user) =>{

  //        }, // success,
  // (err) => {

  // },// fail
  // () => {


  
        console.log(user);
        const req = this.imageService.uploadToGallery(this.myFile, user.uid, this.fileName);
        req
          .then((data: any) => {
            console.log(data);
            // let mydata={
            //   image:data,
            //   package:this.pack
            // }

              let mydata={
              uploadimage:data,
              image:this.myFile,
              filename:this.fileName,
              previous:this.previousFiles,
              package:this.pack
            }
            console.log(mydata);
            console.log(mydata);
            //this.storage.set('IMAGE', data);
            // this.modalCtrl.dismiss();
            // this.openModal(CheckoutPage,mydata).then(() => {
            //   this.loading.dismissLoading();
            // }).catch(() => {
            //   this.loading.dismissLoading();
            // });



          }).catch((e)=>{
            this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
      console.log(e);
      this.loading.dismissLoading();

          });
      },(err) => {
        this.toast.presentToast('Network Error,failed uploading', 'danger');
      console.log(err);
      this.loading.dismissLoading();

      });
  }
  else{
      this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
  this.loading.dismissLoading();     
  }
//     }).catch((e)=>{
//   this.toast.presentToast('Error uploading', 'danger');
//       console.log(e);
// this.loading.dismissLoading();

//     });
  }

 // pickImage() {
 //    this.imagePicker.getPictures(this.imagePickerOptions).then((results) => {
 //      for (var i = 0; i < results.length; i++) {
 //        this.cropImage(results[i]);
 //      }
 //    }, (err) => {
 //       console.log(err);
 //      alert(err);
 //    });
 //  }

  // cropImage(imgPath) {
  //   this.crop.crop(imgPath, { quality: 50 })
  //     .then(
  //       newPath => {
  //         this.showCroppedImage(newPath.split('?')[0])
  //       },
  //       error => {
  //         console.log(error);
  //         this.toast.presentToast('Error cropping image','danger');

  //       }
  //     );
  // }

  cropImage() {
    this.crop.crop(this.originalFile, { quality: 50 })
      .then(
        newPath => {
          this.previousFiles.push(this.myFile);
                  //  this.myFile = newImage;
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
         // this.showCroppedImage(this.myFile.split('?')[0]);
          this.toast.presentToast('Error cropping image', 'danger');
         // alert('Error cropping image' + error);
        }
      );
  }
  // cropImage() {
  //   if (this.showAlert) {
  //     this.showAlert = false;
  //     this.alert.newAlert('How to crop',
  //       'Hold by the borders and then use the handlers to resize crop tool',
  //       [
  //         {
  //           text: 'OK',
  //           handler: () => {
  //             this.crop.crop(this.myFile, { quality: 100 })
  //               .then(
  //                 newImage => {
  //                   this.previousFiles.push(this.myFile);
  //                   this.myFile = newImage;
  //                 },
  //                 error => {
  //                   this.toast.presentToast('Crop failed, try again!', 'danger');
  //                 }
  //               );
  //           }
  //         },
  //       ]);
  //   } else {
  //     this.crop.crop(this.myFile, { quality: 100})
  //       .then(
  //         newImage => {

  //           this.showCroppedImage(newImage.split('?')[0])
  //          // this.previousFiles.push(this.myFile);
  //          // this.myFile = newImage;
  //         }
  //         // ,
  //         // error => {
  //         //   this.toast.presentToast('Crop failed, try again!', 'danger');
  //         // }
  //       ).catch((e)=>{
  //         console.log(e);
  //          this.toast.presentToast('Crop failed, try again!', 'danger');

  //       });
  //  }


  // }

  moveToPrevious() {
 this.saved=false;
    if (this.previousFiles.length) {
      this.myFile = this.previousFiles.pop();
     // this.saved=true;
    }

  }

  editFileName() {
    this.buttonClicked = true;
   //this.newName=;
  }
  setNewFileName() {
    // if (this.newName !== '') {
    //   const ext = this.fileName.substr(this.fileName.lastIndexOf('.'));
    //   this.fileName = this.newName + ext;
    //   this.newName = '';
    // } else {
    //   this.newName = '';
    // }
    const ext = this.fileName.substr(this.fileName.lastIndexOf('.'));
    console.log(ext);
    //   this.fileName = this.newName + ext;
    this.imageName=this.newName+ext;
    this.buttonClicked = false;
  }

// // FILE STUFF
//   makeFileIntoBlob(_imagePath) {
//     // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
//     return new Promise((resolve, reject) => {
//       let fileName = "";
//       this.file
//         .resolveLocalFilesystemUrl(_imagePath)
//         .then(fileEntry => {

//           console.log(fileEntry);
//           let { name, nativeURL } = fileEntry;
         
         


//           // get the path..

//           let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
//           this.myFile = path;
//            this.newName= name;
//           console.log("path", path);
//           console.log("fileName", name);

//           fileName = name;

//           // we are provided the name, so now read the file into
//           // a buffer
//           return this.file.readAsArrayBuffer(path, name);
//         })
//         .then(buffer => {
//           // get the buffer and make a blob to be saved
//           let imgBlob = new Blob([buffer], {
//             type: "image/jpeg"
//           });
//           console.log(imgBlob.type, imgBlob.size);
//           resolve({
//             fileName,
//             imgBlob
//           });
//         })
//         .catch(e => reject(e));
//     });
//   }


  updateFileName() {

    const path = this.myFile.substr(0, this.myFile.lastIndexOf('/') + 1);
    let oldName = this.myFile.substr(this.myFile.lastIndexOf('/') + 1);
    oldName = oldName.substr(0, oldName.lastIndexOf('?'));

    if (oldName === this.fileName) {
      return Promise.resolve();
    }

    return this.file.copyFile(path, oldName, path, this.fileName).then((data: any) => {
      this.myFile = data.nativeURL;

      return Promise.resolve();
    }).catch(err => {
      console.log(err);
    });

  }

  reset() {
    this.angularCropper.cropper.clear();
    this.croped=false;
    //this.myFile = this.originalFile;
    //this.previousFiles = [];

  }
  closecrop(){
    this.croped=false;
  }


  async openModal(component: any,data:any) {
    // const cropModal = await this.modalCtrl.create({
    //   component: CropModalPage,
    //     componentProps: {
    //     "url": this.myFile,
    //    // "paramTitle": "Test Title"
    //   }
    // });
    // cropModal.onDidDismiss()
    //   .then((data: any) => {
    //     console.table(data);

    //     if (data.data!=undefined) {
    //      // console.log(data.data.croppedimage);
    //      this.myFile = data.data.croppedimage;
    //      this.previousFiles =data.data.previous;
    //       //console.log(this.myFile);
    //       //this.isCardAvaliable = true;
    //     }
    //   });
    // cropModal.present();
    const modal = await this.modalCtrl.create({
      component,
      componentProps: {
        "data": data,
       // "paramTitle": "Test Title"
      }
    });
    return await modal.present();

  }

  close() {
    this.modalCtrl.dismiss();
  } 


}
