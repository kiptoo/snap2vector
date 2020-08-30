import { Injectable } from '@angular/core';
import { DataProvider } from '../core/data';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(
    private dataService: DataProvider
  ) { }

  placeOrder(orderObj) {
    return this.dataService.postRequest(`orders/`, orderObj);
  }

  acceptOrder(orderObj) {
    return this.dataService.putRequest(`orders/${orderObj._id}`, orderObj);
  }

  updateOrder(orderObj) {
    return this.dataService.putRequest(`orders/${orderObj._id}`, orderObj);
  }

  getOrdersFromServer(userId) {
    return this.dataService.getRequest(`orders/${userId}`);
  }

  postFeedback(orderObj) {
    return this.dataService.postRequest(`orders/${orderObj._id}`, orderObj);
  }


}
