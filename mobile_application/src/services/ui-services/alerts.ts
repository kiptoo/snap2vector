import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AlertsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertsProvider {

  constructor(private alertCtrl: AlertController) {
    console.log('Hello AlertsProvider Provider');
  }

  newAlert(title: string, message: string, buttons: Array<any>) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons
    });
    alert.present();
  }

}
