import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: any;
  isLoading: boolean = false;

  constructor(private loadingController: LoadingController) { }

  async presentLoading() {
    this.isLoading = true;
    this.loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.isLoading) {
      await this.loading.dismiss();
      this.isLoading = false;
    }
  }


}
