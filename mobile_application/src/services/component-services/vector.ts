import { Injectable } from '@angular/core';
import { DataProvider } from '../core/data';

/*
  Generated class for the VectorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VectorProvider {

  constructor(
    private dataService: DataProvider
  ) { }

  getVectorizedImagesFromServer(orderId) {
    return this.dataService.getRequest(`vectors/${orderId}`);
  }

}
