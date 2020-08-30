import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { FormBuilder } from "@angular/forms";
import { Stripe } from '@ionic-native/stripe';

import { ToastProvider } from "../../services/ui-services/toast";
import { LoadingProvider } from "../../services/ui-services/loading";
import { StorageService } from "../../services/core/storage";
import { UserProvider } from "../../services/component-services/user";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-phone-modal',
  templateUrl: 'phone-modal.html'
})
export class PhoneModalPage {
  userObj: any = {};
  status: boolean;
  phone = "";

  constructor(
    public nav: NavController,
    public loading: LoadingProvider,
    public toast: ToastProvider,
    public formBuilder: FormBuilder,
    public stripe: Stripe,
    private user: UserProvider,
    private afAuth: AngularFireAuth,

    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: StorageService
  ) {
    this.status = this.navParams.get('data');

  }

  updatePhoneNo() {
    console.log(this.phone);
    if (this.phone != "" && this.phone.length === 10) {
      this.loading.showLoading();

      this.afAuth.authState.subscribe((user: any) => {

        user.phone = this.phone;

        this.user.addPhoneDetails(user)
          .subscribe((data: any) => {
            this.toast.newToast('Phone No Updated Successfully!');

            setTimeout(() => {
              this.loading.hideLoading();
              this.dismiss();
            }, 1000)
          });
      });
    } else {
      this.toast.newToast('Form has one or more errors');

    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  phonelimit(event) {
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.substr(0, 10);
      this.phone = event.target.value;
      console.log(this.phone);
    }
  }
}
