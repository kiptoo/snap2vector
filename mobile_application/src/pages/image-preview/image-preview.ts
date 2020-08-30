import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ImagePreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-image-preview',
  templateUrl: 'image-preview.html',
})
export class ImagePreviewPage {

  url: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.url = this.navParams.get('url');
  }


  ionViewDidLoad() {
    console.log(this.navParams)
    console.log('ionViewDidLoad ImagePreviewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
