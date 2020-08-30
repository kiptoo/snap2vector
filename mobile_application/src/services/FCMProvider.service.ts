import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { StorageService } from './core/storage';
import { UserProvider } from './component-services/user';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class FcmProvider {

  private token;

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform,
    private user: UserProvider,
    private events: Events,
    private storage: StorageService,
    private afAuth: AngularFireAuth
  ) {
    if (this.platform.is('cordova')) {
      this.events.subscribe('auth:authenticated', () => {
        this.afAuth.authState.subscribe((account) => {
          this.user.postToken(this.token, account.uid)
            .subscribe((data: any) => {
              console.log(JSON.stringify(data));
            }, (err) => {
              console.log(JSON.stringify(err));
            })
        })
      });
    }

    events.subscribe('user:loggedIn', (user) => {
      if (this.platform.is('cordova')) {
        this.afAuth.authState.subscribe((account) => {
          this.user.postToken(this.token, account.uid)
            .subscribe((data: any) => {
              console.log(JSON.stringify(data));
            }, (err) => {
              console.log(JSON.stringify(err));
            })
        });
      }
    })

  }

  // Get permission from the user
  async getToken() {

    let token;

    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    }

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    }

    return this.saveTokenToFirestore(token)
  }

  // Save the token to firestore
  private saveTokenToFirestore(token) {
    if (!token) return;
    this.token = token;





    /*const devicesRef = this.afs.collection('devices')
   
    const docData = { 
      token,
      userId: 'testUser',
    }
   
    return devicesRef.doc(token).set(docData)*/
  }

  // Listen to incoming FCM messages
  listenToNotifications(): any {
    return this.firebaseNative.onNotificationOpen()
  }

}