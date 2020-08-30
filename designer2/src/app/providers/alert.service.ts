import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async presentAlertConfirm(title: string, message: string, yesText: string, yesCallback: any, noCallback: any) {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: noCallback
        }, {
          text: yesText,
          handler: yesCallback
        }
      ]
    });

    await alert.present();
  }
}
