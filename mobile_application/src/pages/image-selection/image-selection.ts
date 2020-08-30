import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { NavController, PopoverController, ActionSheetController, Platform } from "ionic-angular";

import { CameraOptions, Camera } from "@ionic-native/camera";
import { ImagePicker } from '@ionic-native/image-picker';
import { CheckoutPage } from "../checkout/checkout";
import { Crop } from '@ionic-native/crop';
import { File } from '@ionic-native/file';
import { ToastProvider } from "../../services/ui-services/toast";
import { LoadingProvider } from "../../services/ui-services/loading";
import { AlertsProvider } from "../../services/ui-services/alerts";
import { StorageService } from "../../services/core/storage";
import { ImageProvider } from "../../services/component-services/image";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-image-selection',
  templateUrl: 'image-selection.html',
  styles: [`
  .ion-md-square-outline, .ion-md-checkbox {
    font-size: 18px;
  }
  `]
})

export class ImageSelectionPage {
  @ViewChild("inpName") inpName;

  originalFile: any;
  previousFiles: any = [];
  myFile: any;
  newName: any = "";
  fileName: any = "";
  showAlert = true;
  fileType: string;
  public mobile: boolean = false;


  buttonClicked: boolean;

  constructor(public nav: NavController
    , public popoverCtrl: PopoverController
    , private actionSheetCtrl: ActionSheetController
    , public camera: Camera
    , public imagePicker: ImagePicker
    , public toast: ToastProvider
    , public platform: Platform,
    public loading: LoadingProvider,
    private crop: Crop,
    public file: File,
    private afAuth: AngularFireAuth,
    private alert: AlertsProvider,
    public changeDetectorRef: ChangeDetectorRef,
    private storage: StorageService,
    private imageService: ImageProvider) {

    platform.registerBackButtonAction(() => {
    }, 1);

  }

  presentActionSheet() {
    if (this.platform.is('cordova')) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Select file source',
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

  public browsePhoto(event: EventTarget): void {
    // this.loading = true;
    let file = this.imageService.takePhoto(event);
    this.fileType = file.type;
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (event: any) => {
      this.myFile = event.target.result;
      this.newName = file.name;
      console.log("originalFile: ", file.name);
    };

    fileReader.readAsDataURL(file);
    setTimeout(() => {
      // this.loading = false;
    }, 1000);


  }

  takePicture(sourceType) {
    let options: CameraOptions = {};
    if (sourceType === this.camera.PictureSourceType.CAMERA) {
      options = {
        quality: 100,
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        saveToPhotoAlbum: false
      }

    } else {
      options = {
        quality: 100,
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        saveToPhotoAlbum: false
      }
    }

    this.camera.getPicture(options).then(filePath => {
      this.originalFile = filePath;
      this.myFile = filePath;
      var fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
      if (sourceType === this.camera.PictureSourceType.CAMERA)
        this.fileName = fileName;
      else
        this.fileName = fileName.substr(0, fileName.lastIndexOf('?'));
      this.changeDetectorRef.detectChanges();
      console.log(this.myFile);
    }, err => {
      console.log(err);
    });
  }

  saveImage() {
    this.loading.showLoading();
    this.updateFileName().then(() => {
      this.afAuth.authState.subscribe((user) => {
        let req = this.imageService.uploadToGallery(this.myFile, user.uid, this.newName);
        req
          .then((data: any) => {
            console.log(data)
            this.storage.set('IMAGE', data);
            this.nav.push(CheckoutPage).then(() => {
              this.loading.dismissAllLoading();
            }, (err) => {
              this.loading.dismissAllLoading();
            })
          })
      })
    });
  }

  cropImage() {
    if (this.showAlert) {
      this.showAlert = false;
      this.alert.newAlert('How to crop',
        'Hold by the borders and then use the handlers to resize crop tool',
        [
          {
            text: 'OK',
            handler: () => {
              this.crop.crop(this.myFile, { quality: 75 })
                .then(
                  newImage => {
                    this.previousFiles.push(this.myFile);
                    this.myFile = newImage;
                  },
                  error => {
                    this.toast.newToast('Crop failed, try again!');
                  }
                );
            }
          },
        ]);
    }
    else {
      this.crop.crop(this.myFile, { quality: 75 })
        .then(
          newImage => {
            this.previousFiles.push(this.myFile);
            this.myFile = newImage;
          },
          error => {
            this.toast.newToast('Crop failed, try again!');
          }
        );
    }


  }

  moveToPrevious() {
    if (this.previousFiles.length) {
      this.myFile = this.previousFiles.pop();
    }
    // this.changeDetectorRef.detectChanges();
  }
  focus() {
    //this.inpName.setFocus();
  }
  editFileName() {
    this.buttonClicked = true;
    //this.inpName.setFocus();
    // this.changeDetectorRef.detectChanges();
  }
  setNewFileName() {
    if (this.newName != "") {
      var ext = this.fileName.substr(this.fileName.lastIndexOf('.'));
      this.fileName = this.newName + ext;
      this.newName = "";
    }
    else {
      this.newName = "";
    }
    this.buttonClicked = false;
    // this.changeDetectorRef.detectChanges();
  }

  updateFileName() {
    //this.buttonClicked = false;

    var path = this.myFile.substr(0, this.myFile.lastIndexOf('/') + 1);
    var oldName = this.myFile.substr(this.myFile.lastIndexOf('/') + 1);
    oldName = oldName.substr(0, oldName.lastIndexOf('?'));

    if (oldName === this.fileName) {
      return Promise.resolve();
    }

    return this.file.copyFile(path, oldName, path, this.fileName).then((data: any) => {
      this.myFile = data.nativeURL;
      //this.fileName=this.newName+ext;
      //this.newName="";
      // this.changeDetectorRef.detectChanges();
      return Promise.resolve();
    }).catch(err => {
      console.log(err);
    });

  }

  reset() {
    this.myFile = this.originalFile;
    this.previousFiles = [];
    // this.changeDetectorRef.detectChanges();
  }

  changeDetect($event) {
    // this.changeDetectorRef.detectChanges();
  }
}