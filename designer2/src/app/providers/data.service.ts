import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { CONFIGS } from './config';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private idToken: any;
  public orders: any;

  constructor(
    private http: HttpClient
  ) {
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
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: tok
      })
    };

    return this.http.get(url, httpOptions);
  }

  register(designerObj, tok) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: tok
      })
    };
    const url = CONFIGS.SERVER_URL + 'designers/';
    return this.http.post(url, designerObj, httpOptions);
  }

  sendNotification(notificationObj,orderid) {
    const url = CONFIGS.SERVER_URL + `notifications/${orderid}`;
    console.log(notificationObj);
    return this.http.put(url, notificationObj, this.getArgHeaders());
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
        headers: new HttpHeaders({
          Authorization: this.idToken
        })
      };
      return httpOptions;
    }
  }

}
