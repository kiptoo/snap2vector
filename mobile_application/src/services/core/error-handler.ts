import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

/*
  Generated class for the ErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorHandlerProvider {

  handleServerError(err) {
    return throwError(new Error(err));
  }

}
