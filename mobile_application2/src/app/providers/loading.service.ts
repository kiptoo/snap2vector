import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: any;
  isLoading: boolean = false;

  constructor(private loadingController: LoadingController) { }

  // async presentLoading() {
  //   this.isLoading = true;
  //   this.loading = await this.loadingController.create({
  //     message: 'Loading...',
  //     duration: 5000
  //   });
  //   await this.loading.present();
  // }

  // async dismissLoading() {
  //   if (this.isLoading) {
  //     await this.loading.dismiss();
  //     this.isLoading = false;
  //   }
  // }
  async presentLoading() {
    // if(this.isLoading = true){
    //   return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    // }
    this.isLoading = true;
    return await this.loadingController.create({
       message: 'Loading...',
       // ,
     duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
   async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
     // spinner: 'dots',
      duration: 5000,
      backdropDismiss:true,
      showBackdrop:false,
      mode:'md',
      message: 'Loading...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
    async dismissLoading(){
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }


}
