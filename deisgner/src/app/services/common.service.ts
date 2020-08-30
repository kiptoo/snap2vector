import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONFIGS } from 'src/app/config';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class CommonService {
  private idToken = null;
  constructor(public http: Http) {

    firebase.auth().onIdTokenChanged((user: firebase.User) => {
      if (user && user.uid) {
        user.getIdToken(false)
          .then((data: any) => {
            this.idToken = data;
          });
      }
    });
  }

  login(tok): Observable<any> {

    const url = CONFIGS.SERVER_URL + 'designers/';

    const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': tok
      })
    };

    return this.http.get(url, httpOptions);
  }

  register(designerObj, tok) {
    const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': tok
      })
    };
    const url = CONFIGS.SERVER_URL + 'designers/';
    return this.http.post(url, designerObj, httpOptions);
  }
  sendNotification(notificationObj) {
    const url = CONFIGS.SERVER_URL + 'notifications/';
    console.log(notificationObj);
    return this.http.post(url, notificationObj, this.getArgHeaders());
  }
  postImages(fileData) {
    const url = CONFIGS.SERVER_URL + 'vectors/';
    return this.http.post(url, fileData, this.getArgHeaders());
  }

  getOrders(): Observable<any> {
    const url = CONFIGS.SERVER_URL + 'orders/';
    return this.http.get(url, this.getArgHeaders());
  }

  revisionReject(order: any) {
    const url = CONFIGS.SERVER_URL + 'orders/';
    return this.http.put(url, order, this.getArgHeaders());
  }

  private getArgHeaders(): any {
    if (this.idToken != null) {
      const httpOptions = {
        headers: new Headers({
          'Authorization': this.idToken
        })
      };
      return httpOptions;
    }
  }


}
