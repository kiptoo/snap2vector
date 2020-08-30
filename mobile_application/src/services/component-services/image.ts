import { Injectable } from '@angular/core';
import { DataProvider } from '../core/data';
import { api } from '../core/config';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer';
import * as firebase from 'firebase/app';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {

  constructor(
    private dataService: DataProvider,
    private camera: Camera,
    private fileTransfer: FileTransfer
  ) { }


  public takePhoto(event: EventTarget): File {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    let f = files[0];
    if (f) {
      return f;
    }
    else {
      return null;
    }
  }

  public takePhotoNative(type: string): Promise<any> {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true
    }
    if (type === 'gallery') {
      options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    }
    return this.camera.getPicture(options);
  }

  uploadToGallery(file, userId, file_name) {
    let fileName: string = file_name,
      storageRef: firebase.storage.Reference,
      parseUpload: any,
      url: any;

    return new Promise((resolve, reject) => {
      storageRef = firebase.storage().ref('user_files/' + +Date.now() + fileName);
      parseUpload = storageRef.putString(file, 'data_url');

      parseUpload.on('state_changed', (_snapshot) => {
      },
        (_err) => {
          reject(_err);
        },
        (success) => {
          storageRef.getDownloadURL().then((url) => {
            let myFile = {
              filename: fileName,
              originalname: fileName.split('.')[0],
              url: url,
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
        });
    });
  }

  uploadGalleryImagesBrowser(image: string, userId: string, imageName: string) {
    let options = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { userId: userId, image_name: imageName },
    }
    return this.dataService.postRequest(`image/`, options);

  }

  updateImage(image) {
    return this.dataService.putRequest(`image/${image._id}`, image);
  }

  requestRevision(orderObj, image) {
    let url = api.SERVER_URL + 'revision';
    let options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { order: orderObj },
    }

    const filesTransfer = this.fileTransfer.create();

    return filesTransfer.upload(image, url, options);
  }

  deleteImages(image: any) {


    let storageRef = firebase.storage().ref('user_files/');
    var desertRef = storageRef.child(image.originalname);
    return desertRef.delete().then(() => {
      this.dataService.deleteRequest(`image/${image._id}`).subscribe(() => {
      })
    });

  }


}
