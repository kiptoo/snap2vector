import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
public toastMsgs: any = [];
  constructor(
    public toastController: ToastController
  ) { }

  async presentToast(message: string, color: string) {
    this.toastMsgs.push(message);
    const toast = await this.toastController.create({
      message:this.toastMsgs.toString().split(",").join("\n"),
      duration: 5000,
    //  position:"middle",
      position:"bottom",
      color
    });
    toast.present();
    toast.onDidDismiss().then(() => {
        this.toastMsgs = [];
    });
    
  }
  
    async presentToastBottom(message: string, color: string) {
    this.toastMsgs.push(message);
    const toast = await this.toastController.create({
      message:this.toastMsgs.toString().split(",").join("\n"),
      duration: 5000,
      //position:"middle",
      position:"bottom",
      color
    });
    toast.present();
    toast.onDidDismiss().then(() => {
        this.toastMsgs = [];
    });
    
  }
  

  



}
