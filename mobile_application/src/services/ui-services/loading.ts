import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  loading: any
  isLoading: boolean;

  constructor(private loadingCtrl: LoadingController) {
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    this.isLoading = true;
  }

  hideLoading() {
    if (this.isLoading) {
      this.loading.dismiss();
      this.isLoading = false;
    }
  }

  dismissAllLoading() {
    if (this.isLoading) {
      this.loading.dismissAll();
      this.isLoading = false;
    }
  }

}
