import { Injectable } from '@angular/core';
import { DataService } from './data.service';
//import { CONFIGS } from './config';
import { CONFIGS } from 'src/app/providers/config';
/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var Stripe: any;
@Injectable()
export class PaymentProvider {
//  declare var Stripe: any;
   // stripe = Stripe(CONFIGS.stripeKey);
stripe = Stripe(CONFIGS.stripeKey);

  constructor(private dataService: DataService) {
    console.log('Hello PaymentProvider Provider');
  }

  makePayment(user,amount) {

   // user.card=" ";
// let studentDetails = 
// {
//     id: 56,
//     name: 'Test Person1',
//     section: 'Section 1',
//     phoneNumber: '12345678'
//   };




    // let paymentObj = {
    //   "user":user,
    //   "amount":amount
    // }
    //let tok=CONFIGS.stripeKey;
     let tok="tok_visa";
      let paymentObj = {
      user,
      amount,
      tok
    }
    console.log(paymentObj);
    // console.log(studentDetails[0].name);

     //return this.dataService.postpayRequest(`payments/`,JSON.stringify(paymentObj));
     return this.dataService.postpayRequest(`payments`,paymentObj);
    //return this.dataService.getRequest(`payments`);
    // this.dataService.postRequest(`payments`, paymentObj).subscribe((user: any) => {

    //    console.log(user);
    //    return user;

    // });
    //    console.log(i);
    // return i;
  }
  updatecredit(userId,source) {

    return this.dataService.putRequest(`payments/updatecard/${userId}`,source);

  }

}
