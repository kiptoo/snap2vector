import { Injectable } from '@angular/core';
import { DataService } from './data.service';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {
private fileTransfer: any;

  constructor(
    private dataService: DataService
  ) { }
getfiletransfer(){
 return  this.fileTransfer;

}
settfiletransfer(file){
this.fileTransfer=file;
}
  placeOrder(orderObj) {
    console.log(orderObj);
    return this.dataService.postpayRequest(`orders/`, orderObj);
  }

  acceptOrder(orderObj) {
    return this.dataService.putRequest(`orders/${orderObj._id}`, orderObj);
  }

  updateOrder(orderObj) {
    return this.dataService.putRequest(`orders/${orderObj._id}`, orderObj);
  }

  getOrdersFromServer(userId) {
    return this.dataService.getRequest(`orders/${userId}`);
    //return this.dataService.getRequest(`orders/mobile/${userId}`);
  }

  postFeedback(orderObj) {
    return this.dataService.postRequest(`orders/${orderObj._id}`, orderObj);
  }


}
