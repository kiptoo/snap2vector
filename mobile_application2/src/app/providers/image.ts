import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import * as firebase from 'firebase/app';
import { CONFIGS } from './config';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {

  constructor(
    private dataService: DataService,
    private camera: Camera,
    private fileTransfer: FileTransfer,
    private storage: AngularFireStorage
  ) { }


  public takePhoto(event: EventTarget): File {
    console.log(event);
    const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    const files: FileList = target.files;
    console.log(files);
    const f = files[0];
    if (f) {
      return f;
    } else {
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
        });
    });
  }

  uploadGalleryImagesBrowser(userId: string, imageName: string) {
    const options = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { userId, imageName },
    }
    return this.dataService.postRequest(`image/`, options);

  }

  updateImage(image: { _id: any; }) {
    return this.dataService.putRequest(`image/${image._id}`, image);
  }

  requestRevision(orderObj: any, image: string) {
    const url = CONFIGS.SERVER_URL + 'revision';
    const options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { order: orderObj },
    }
 console.log(options);
    const filesTransfer = this.fileTransfer.create();

    return filesTransfer.upload(image, url, options);
  }

  deleteImages(image: any) {


    const storageRef = firebase.storage().ref('user_files/');
    const desertRef = storageRef.child(image.originalname);
    return desertRef.delete().then(() => {
      this.dataService.deleteRequest(`image/${image._id}`).subscribe(() => {
      })
    });

  }


}
