import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from "@angular/core";
import { NavController, PopoverController, ActionSheetController, Platform, NavParams } from "ionic-angular";
 
import { CameraOptions, Camera } from "@ionic-native/camera";
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { File } from '@ionic-native/file';
import { ToastProvider } from '../../services/ui-services/toast';
import { LoadingProvider } from '../../services/ui-services/loading';
import { ImageProvider } from '../../services/component-services/image';

@Component({
  selector: 'page-revision-image',
  templateUrl: 'revision-image.html',
  styles: [`
  .ion-md-square-outline, .ion-md-checkbox {
    font-size: 18px;
  }
  `]
})

export class RevisionImagePage {
  @ViewChild("inpName") inpName;

  instructions = "";
  originalImage: any;
  previousImages: any = [];
  image: any;
  userObj: any = {};
  newName: any = "";
  imageName: any = "";
  orderObj: any = {};

  buttonClicked: boolean;

  constructor(
    public nav: NavController,
    public popoverCtrl: PopoverController,
    
    private actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public imagePicker: ImagePicker,
    public toast: ToastProvider,
    public platform: Platform,
    public loading: LoadingProvider,
    private crop: Crop,
    public file: File,
    public navParams: NavParams,
    private imageService: ImageProvider
  ) {

    this.orderObj = this.navParams.get('data');
    console.log(this.orderObj);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select image source',
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

    this.camera.getPicture(options).then(imgPath => {
      this.originalImage = imgPath;
      this.image = imgPath;
      var fileName = imgPath.substr(imgPath.lastIndexOf('/') + 1);
      if (sourceType === this.camera.PictureSourceType.CAMERA)
        this.imageName = fileName;
      else
        this.imageName = fileName.substr(0, fileName.lastIndexOf('?'));
      console.log(this.image);
    }, err => {
      console.log(err);
    });
  }

  sendRequest() {
    this.loading.showLoading();
    this.orderObj.instructions = this.instructions;

    this.imageService.requestRevision(this.orderObj, this.image).then((data: any) => {
      this.loading.hideLoading();
      this.toast.newToast('Revision Request Sent.');

      this.nav.setRoot(TabsPage);
    });
  }

  cropImage() {
    this.crop.crop(this.image, { quality: 75 })
      .then(
        newImage => {
          this.previousImages.push(this.image);
          this.image = newImage;
          var fileName = this.image.substr(this.image.lastIndexOf('/') + 1);
          this.imageName = fileName.substr(0, fileName.lastIndexOf('?'));
        },
        error => {
          this.toast.newToast('Crop failed, try again!');

        }
      );
  }

  moveToPrevious() {
    if (this.previousImages.length) {
      this.image = this.previousImages.pop();
    }
  }

  focus() {
    this.inpName.setFocus();
  }

  editFileName() {
    this.buttonClicked = true;
    this.inpName.setFocus();
  }

  updateFileName() {
    this.buttonClicked = false;
    var ext = this.imageName.substr(this.imageName.lastIndexOf('.'));
    if (this.newName != "" && this.imageName != (this.newName + ext)) {
      var path = this.image.substr(0, this.image.lastIndexOf('/') + 1);
      var oldName = this.imageName;
      this.file.moveFile(path, oldName, path, this.newName + ext).then((data: any) => {
        console.log(data);
        this.image = data.nativeURL;
        this.imageName = this.newName + ext;
        this.newName = "";
      }).catch(err => {
        console.log(err);
      });
    }
  }

  reset() {
    this.image = this.originalImage;
    this.previousImages = [];
  }
}