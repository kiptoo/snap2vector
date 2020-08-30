import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from 'src/app/providers/toast.service';
import { UserProvider } from 'src/app/providers/user';
import { CONFIGS } from 'src/app/providers/config';
import { DataService } from 'src/app/providers/data.service';
import { LoadingService } from 'src/app/providers/loading.service';
//import { Stripe } from '@ionic-native/stripe/ngx';
declare var Stripe: any;

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.page.html',
  styleUrls: ['./card-modal.page.scss'],
})
export class CardModalPage implements OnInit {
   curruser:any;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastService,
    private user: UserProvider,
    //private stripe: Stripe,
    private dataService : DataService,
    private modalCtrl: ModalController,
    private loadingService: LoadingService
  ) { 
     this.afAuth.authState.subscribe((users) => {
      console.log(users);
      this.curruser=users
    });


  }


  @ViewChild('cardElement') cardElement: ElementRef;
  @ViewChild('paymentForm') paymentForm: ElementRef;
  @ViewChild('cardErrors') cardErrors: ElementRef;
  
  stripe = Stripe(CONFIGS.stripeKey);
  card: any;
  createdcard: any;

  ngOnInit() {
     if(this.dataService.isOnline()){
    //this.stripe.setPublishableKey(CONFIGS.stripeKey);
    this.setupStripe();

  }
  else{
   this.modalCtrl.dismiss();

      this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');

  }

  }

  setupStripe() {
    const elements = this.stripe.elements();
    const style = {
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

    this.card = elements.create('card', { style });

    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      console.log("Card");
      const displayError = this.cardErrors.nativeElement;
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    const form = this.paymentForm.nativeElement;
    form.addEventListener('submit', event => {
      event.preventDefault();
 this.loadingService.presentLoading();
      // this.stripe.createToken(this.card)
      this.stripe.createSource(this.card).then(result => {
    
        console.log(result);
        if (result.error) {
          const errorElement = this.cardErrors.nativeElement;
          errorElement.textContent = result.error.message;
        } else {

     

          let source=result.source;
          this.createdcard=result;
         

          this.afAuth.authState.subscribe((user: any) => {
            console.log(user);
              
         this.user.getUser(this.curruser.uid).subscribe(async (newuser: any) => {
          this.loadingService.dismissLoading();
          console.log(newuser);
           console.log(newuser[0].source);
           let iscard=newuser[0].source;
           // let iscard;
           // if (sou.id!== 'undefined') {
           //    // do something
           //     iscard=true;
           //  }
           //  else{
           //    iscard=false;
           //  }
          if (iscard){
             let  cardSource = {
             source

          }
           this.user.updatecredit(cardSource, user.uid)
              .subscribe(async (res: any) => {
                console.log(res);
                await this.modalCtrl.dismiss( this.createdcard);
                // await this.loadingService.dismissLoading();
                await this.toast.presentToast('Card Updated Successfully!', 'dark');
               // await this.modalCtrl.dismiss();
              },(err)=>{
                 this.loadingService.dismissLoading();
                  this.toast.presentToast('Card  not Updated !', 'danger');
              })
          }
          else{
            // this.loadingService.presentLoading();
        //        this.stripe.customers.create({
        //     email: this.curruser.email,
        //     source: result.source.id
        // }, (err, customer) => {
            let  cardSource = {
            // 'cus_id': customer.id,      
             source

          }
        
             this.user.addCardDetails(cardSource, user.uid)
              .subscribe(async (res: any) => {
                console.log(res);
                 await this.modalCtrl.dismiss( this.createdcard);
                await this.toast.presentToast('Card created Successfully!', 'dark');
               // await this.modalCtrl.dismiss();
              },(err)=>{
                 this.loadingService.dismissLoading();
                  this.toast.presentToast('Card  not Updated !', 'danger');
              })
          //  });


             } 
              })
          })
        }
      });
    });
  }

  dismiss() {
    this.modalCtrl.dismiss( this.createdcard);
      this.loadingService.dismissLoading();
  }

}
