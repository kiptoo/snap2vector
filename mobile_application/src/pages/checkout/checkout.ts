import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams, Events, ModalController } from "ionic-angular";
import { api } from "../../services/core/config";
import { AngularFireAuth } from "angularfire2/auth";
import { ToastProvider } from "../../services/ui-services/toast";
import { UserProvider } from "../../services/component-services/user";
import { StorageService } from "../../services/core/storage";
import { OrderProvider } from "../../services/component-services/order";
import { TabsPage } from "../tabs/tabs";
import { PaymentProvider } from "../../services/component-services/payment";
import { User, UserInfo } from "firebase";
import { CardModalPage } from "../card-modal/card-modal";
import { LoadingProvider } from "../../services/ui-services/loading";

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  card: any;
  orderObj: any = {};
  isCardAvaliable: boolean;
  userObj: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private user: UserProvider,
    private toast: ToastProvider,
    private storage: StorageService,
    private orderService: OrderProvider,
    private events: Events,
    private paymentService: PaymentProvider,
    private modalCtrl: ModalController,
    private loading: LoadingProvider
  ) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe((user: UserInfo) => {
      // this.loading.showLoading();
      this.user.getUser(user.uid).subscribe((userData: any) => {
        if (userData && userData[0].card) {
          this.userObj = userData[0];
          this.card = userData[0].card;
          this.isCardAvaliable = true;
          // this.loading.dismissAllLoading();
        } else {
          this.isCardAvaliable = false;
          // this.loading.dismissAllLoading();
        }
      })
    })
  }

  addCreditCard() {
    let cardModal = this.modalCtrl.create(CardModalPage);
    cardModal.onDidDismiss((data: any) => {
      if (data) {
        this.card = data;
        this.isCardAvaliable = true;
      }
    })
    cardModal.present();
  }

  makePayment() {
    this.loading.showLoading();
    this.storage.get('PACKAGE').then((myPackage: any) => {
      this.orderObj.package = myPackage;
      this.paymentService.makePayment(this.userObj, this.orderObj.package.amount)
        .subscribe(async (res) => {
          this.afAuth.authState.subscribe(async (user: any) => {
            await this.storage.get('IMAGE').then((image: any) => {
              this.orderObj.images = image;
              this.orderObj.date = Date.now();
              this.orderObj.userId = user.uid
              this.orderService.placeOrder(this.orderObj).subscribe((res) => {
                this.toast.newToast('Order Placed Successfully!');
                this.loading.hideLoading();
                this.events.publish('order:placed');
                this.storage.remove('PACKAGE');
                this.storage.remove('IMAGE');
                this.navCtrl.setRoot(TabsPage).then(() => {
                  this.loading.hideLoading();
                })
              })
            });
          }, (err: any) => {
            this.loading.hideLoading();
            this.toast.newToast(err.message)
          });
        }, (err) => {
          this.loading.hideLoading();
          this.toast.newToast('Order can be accomplished')
          this.navCtrl.setRoot(TabsPage);
        })
    });
  }
}



