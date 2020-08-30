import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, Events, ModalController } from "ionic-angular";
import { SMS } from '@ionic-native/sms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { TabsPage } from '../pages/tabs/tabs';
import { CardModalPage } from '../pages/card-modal/card-modal';
import { PhoneModalPage } from '../pages/phone-modal/phone-modal';
import { Stripe } from '@ionic-native/stripe';
import { CompanyModalPage } from '../pages/company-modal/company-modal';
import { MenuItem } from '../interfaces/menu-item.interface';
import { AlertsProvider } from '../services/ui-services/alerts';
import { StorageService } from '../services/core/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from '../services/component-services/user';
import { UserInfo } from 'firebase/app';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  pages;
  rootPage: any = LoginPage;
  userObj: UserInfo = {} as UserInfo;
  userData: firebase.User;
  // public debug: boolean = true;
  public debug: boolean = false;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public events: Events,
    public sms: SMS,
    private user: UserProvider,
    public modalCtrl: ModalController,
    public stripe: Stripe,
    public alert: AlertsProvider,
    private storage: StorageService,
    private afAuth: AngularFireAuth,
  ) {

    this.initializeApp();


    this.events.subscribe('card:updated', (data) => {

    });

    this.events.subscribe('user:loggedOut', () => {
      this.afAuth.auth.signOut().then(() => {
        if (this.nav.getActive().name != 'LoginPage') {
          this.nav.setRoot(LoginPage);
        }
      })
    })

    this.appMenuItems = [
      { title: 'Home', component: TabsPage, icon: 'home' },
    ];

    this.afAuth.authState.subscribe((res) => {
      this.userData = res;
    })

  }





  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.


      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);


      // Using firebase service to check authenctication
      this.afAuth.authState
        .subscribe(
          (user: any) => {
            if (user) {
              this.nav.setRoot(TabsPage);
            } else {
              this.nav.setRoot(LoginPage);
            }
          }, (err) => {
            this.nav.setRoot(LoginPage);
          });


      //*** Control Keyboard
      //this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openCardModal(isNew) {
    let modal = this.modalCtrl.create(CardModalPage, { data: isNew });
    modal.present();
    modal.onDidDismiss((data: any) => {
    });
  }

  openPhoneModal(isNew) {
    let modal = this.modalCtrl.create(PhoneModalPage, { data: isNew });
    modal.present();
    modal.onDidDismiss((data: any) => {
      this.afAuth.authState.subscribe((res) => {
        this.userObj = res;
      });
    });
  }

  openCompanyModal(company) {
    let modal = this.modalCtrl.create(CompanyModalPage, { data: company });
    modal.present();
    modal.onDidDismiss((data: any) => {
      this.afAuth.authState.subscribe((res) => {
        this.userObj = res;
      });
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      if (this.nav.getActive().name != 'LoginPage') {
        this.nav.setRoot(LoginPage);
      }
    })
  }

  message() {
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the native android SMS messaging
        //intent: '' // send SMS without open any other app
      }
    };
    this.sms.send("15187791415", "", options);
  }

  deletePhoneDetails() {
    this.alert.newAlert("Delete Phone No.", "Are you sure?", [
      {
        text: "No"
      },
      {
        text: "Yes",
        handler: () => {
          this.userObj.phoneNumber = null;
          this.user.deletePhoneDetails(this.userObj)
            .subscribe((data: any) => {
            });
        }
      }
    ]
    );
  }

  deleteCardDetails() {
    this.alert.newAlert("Delete Card Details", "Are you sure?", [
      {
        text: "No",
      },
      {
        text: "Yes",
        handler: () => {
          this.user.deleteCardDetails(this.userObj)
            .subscribe((data: any) => {

            });
        }
      }
    ]
    );
  }
}
