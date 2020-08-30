import { Injectable } from '@angular/core';
import { DataProvider } from '../core/data';

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentProvider {

  constructor(private dataService: DataProvider) {
    console.log('Hello PaymentProvider Provider');
  }

  makePayment(user, amount) {
    let paymentObj = {
      user: user,
      amount: amount
    }
    return this.dataService.postRequest(`payments/`, paymentObj);
  }

}
