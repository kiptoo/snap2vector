import { Component } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ImageProvider } from '../../services/component-services/image';

@Component({
  selector: 'photo-modal',
  templateUrl: 'photo-modal.html'
})
export class PhotoModalComponent {

  text: string;
  imgSrc: string;
  disable: boolean;

  constructor(
    public platform: Platform,
    public camera: Camera,
    public viewCtrl: ViewController,
    private imageService: ImageProvider
  ) {

  }

  takePhotoNative(type: string) {

    this.imageService.takePhotoNative(type)
      .then((imageData) => {
        this.imgSrc = 'data:image/jpeg;base64,' + imageData;
        this.disable = false;
        this.viewCtrl.dismiss({ img: this.imgSrc });
      }, (err) => {
        console.log('Something ocurred :', err)
      });
  }

}
