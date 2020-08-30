import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test-data-provider',
  templateUrl: 'test-data-provider.html',
})
export class TestDataProviderPage {

  public response: string = null;
  userObj: any = {};

  constructor(public navCtrl: NavController
    , public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestDataProviderPage');
  }

  public uploadImageTest(): void {
  }

}
