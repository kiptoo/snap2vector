import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { DataService } from 'src/app/providers/data.service';
import { NavController, ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/providers/loading.service';
import { ToastService } from 'src/app/providers/toast.service';
import { DetailsPage } from '../details/details.page';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  orders: any[] = [];
  displayedOrders: any[] = [];

  constructor(
    private dataService: DataService,
    private navCtrl: NavController,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.loadingService.presentLoading();
    firebase.auth().onIdTokenChanged((user: firebase.User) => {
      if (user && user.uid) {
        user.getIdToken(false)
          .then((token: any) => {
            this.dataService.getOrders().subscribe(data => {
              this.orders = data.reverse().filter(obj => {
                return obj.delivered === false && obj.accepted === false && obj.revisionRequested === false;
              });
              this.displayedOrders = data.reverse().filter(obj => {
                return obj.delivered === false && obj.accepted === false && obj.revisionRequested === false;
              }).slice(0, 10);
              this.loadingService.dismissLoading();
            }, err => {
              console.log(err);
              this.loadingService.dismissLoading();
            })
          });
      } else {
        this.loadingService.dismissLoading();
        this.toastService.presentToast('You are not authenticated', 'danger');
        this.navCtrl.navigateRoot('/login');
      }
    })
  }

  doInfinite(event: any): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {
        const displayedOrderslength = this.displayedOrders.length;
        try {
          this.displayedOrders = this.displayedOrders.concat(this.orders.slice(displayedOrderslength, displayedOrderslength + 10))
          event.target.complete()
          resolve();
        } catch (e) {
          this.toastService.presentToast('No more orders', 'primary');
          resolve();
        }
      }, 500);
    })
  }

  async goToDetails(order) {
    const modal = await this.modalCtrl.create({
      component: DetailsPage,
      componentProps: {
        order
      },
        cssClass: "modal-fullscreen" 
    });
    return await modal.present();
  }

}
