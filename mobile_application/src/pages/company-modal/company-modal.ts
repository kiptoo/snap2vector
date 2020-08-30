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
  selector: 'page-company-modal',
  templateUrl: 'company-modal.html'
})
export class CompanyModalPage {

  userObj: any = {};
  status: boolean;
  company = "";
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
    private storage: StorageService) {

    this.status = this.navParams.get('data');

  }

  updateCompanyName() {
    console.log(this.company);
    if (this.company != "") {
      this.loading.showLoading();

      this.afAuth.authState.subscribe((user: any) => {

        user.company = this.company;

        this.user.addPhoneDetails(user).subscribe((data: any) => {
          setTimeout(() => {
            this.toast.newToast('Company Name Updated Successfully!');
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
}
