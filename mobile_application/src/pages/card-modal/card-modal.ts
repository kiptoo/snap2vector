import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { api } from "../../services/core/config";
import { AngularFireAuth } from "angularfire2/auth";
import { ToastProvider } from "../../services/ui-services/toast";
import { UserProvider } from "../../services/component-services/user";

@Component({
  selector: 'page-card-modal',
  templateUrl: 'card-modal.html'
})
export class CardModalPage {

  @ViewChild('cardElement') cardElement: ElementRef;
  @ViewChild('paymentForm') paymentForm: ElementRef;
  @ViewChild('cardErrors') cardErrors: ElementRef;

  stripe = Stripe(api.stripeKey);
  card: any;



  constructor(
    public nav: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastProvider,
    private user: UserProvider,
    private viewCtrl: ViewController
  ) {
  }
  ionViewDidLoad() {
    this.setupStripe();
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });

    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = this.cardErrors.nativeElement;
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = this.paymentForm.nativeElement;
    form.addEventListener('submit', event => {
      event.preventDefault();

      // this.stripe.createToken(this.card)
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = this.cardErrors.nativeElement;
          errorElement.textContent = result.error.message;
        } else {
          let cardSource = {
            card: result.source
          }

          this.afAuth.authState.subscribe((user: any) => {
            this.user.addCardDetails(JSON.stringify(cardSource), user.uid)
              .subscribe(async (res: any) => {
                await this.toast.newToast('Card Updated Successfully!');
                await this.viewCtrl.dismiss(cardSource);
              })
          })
        }
      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(null);
  }


}

