import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import { Observable, from } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { mergeMap, catchError } from 'rxjs/operators';
import { Events } from 'ionic-angular';
import { ToastProvider } from '../ui-services/toast';
import { LoadingProvider } from '../ui-services/loading';

@Injectable()
export class InterceptorProvider implements HttpInterceptor {

  constructor(
    private toast: ToastProvider,
    private loading: LoadingProvider,
    private events: Events
  ) { }

  // Intercepts all HTTP requests!
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let promise = firebase.auth().currentUser.getIdToken();

    return from(promise).pipe(
      mergeMap(token => {
        let clonedReq = this.addToken(request, token);
        return next.handle(clonedReq).pipe(
          catchError((err: any) => {
            if (err.status === 401) {
              this.toast.newToast('You are not authorized!');
              this.loading.dismissAllLoading();
            } else {
              this.loading.dismissAllLoading();
            }
            return _throw(err);
          })
        );
      }));

  }


  // Adds the token to your headers if it exists
  private addToken(request: HttpRequest<any>, token: any) {
    if (token) {
      this.events.publish('auth:authenticated', {});
      let clone: HttpRequest<any>;
      clone = request.clone({
        setHeaders: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
          Authorization: `Bearer ${token}`
        }
      });
      return clone;
    } else {
      this.events.publish('user:loggedOut', {});
    }

    return request;
  }
}
