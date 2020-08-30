import { Injectable } from '@angular/core';
import { DataService } from './data.service';

/*
  Generated class for the VectorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VectorProvider {

  constructor(
    private dataService: DataService
  ) { }

  getVectorizedImagesFromServer(orderId) {
    return this.dataService.getRequest(`vectors/${orderId}`);
  }

}
