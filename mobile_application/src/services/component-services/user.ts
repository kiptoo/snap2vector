import { Injectable } from '@angular/core';
import { DataProvider } from '../core/data';
import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(
    private dataService: DataProvider,
    private platform: Platform,
    private afAuth: AngularFireAuth
  ) { }

  private socialSignIn(provider): Promise<any> {
    if (this.platform.is('cordova')) {
      return firebase.auth().signInWithRedirect(provider)
        .then((data: any) => {
          console.log("data: ", data);
          return firebase.auth().getRedirectResult();
        });
    } else {
      return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          return credential;
        });
    }
  }

  public googleLogin(): Promise<firebase.User> {
    return this.socialSignIn(new firebase.auth.GoogleAuthProvider);
  }

  public emailLogin(tok) {
    return this.dataService.getRequest('users/');
  }

  public getUser(userId) {
    return this.dataService.getRequest(`users/${userId}`);
  }

  public emailRegister(userObj: any, tok) {
    return this.dataService.postRequest('users/', userObj);
  }

  public forgotPassword(email: String) {
    return this.dataService.postRequest('forget-password/', email);
  }

  addCardDetails(card, userId) {
    return this.dataService.putRequest(`users/${userId}`, card);
  }

  deleteCardDetails(user) {
    return this.dataService.putRequest(`users/${user.uid}`, user);
  }


  deletePhoneDetails(user) {
    return this.dataService.putRequest(`users/${user.uid}`, user);
  }

  addPhoneDetails(user) {
    return this.dataService.putRequest(`users/${user.uid}`, user);
  }

  postToken(token, userId) {
    let data = { token: token, userId: userId };
    return this.dataService.putRequest(`store_token/`, data);
  }

  checkAndUpdate(user) {
    return this.dataService.postRequest(`users/`, user);
  }

}
