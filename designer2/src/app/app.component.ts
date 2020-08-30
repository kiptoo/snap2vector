import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    const firebaseConfig = {
      apiKey: 'AIzaSyDgBLcujUHBKjLXoz51JK7CL1Q2BR6WcG8',
      authDomain: 'snaptovector.firebaseapp.com',
      databaseURL: 'https://snaptovector.firebaseio.com',
      projectId: 'snaptovector',
      storageBucket: 'snaptovector.appspot.com',
      messagingSenderId: '942240372918',
      appId: '1:942240372918:web:c56e88f13e536b6e'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
