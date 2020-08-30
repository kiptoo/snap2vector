import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }


  async newAlert(title: string, message: string, buttons: Array<any>) {
    let alert = await this.alertController.create({
      header: title,
      message,
      buttons
    });
    alert.present();
  }
  
}
