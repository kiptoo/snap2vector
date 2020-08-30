import { Component, OnInit } from "@angular/core";
import { NavController, ModalController, Platform, Events } from "ionic-angular";

import { FcmProvider } from '../../services/FCMProvider.service';
import { tap } from 'rxjs/operators';
import { VectorPackagePage } from "../vector-package/vector-package";
import { DigitizePackagePage } from "../digitize-package/digitize-package";
import { ImagePicker } from "@ionic-native/image-picker";
import { FileTransfer } from "@ionic-native/file-transfer";
import { SMS } from '@ionic-native/sms';
import { Network } from '@ionic-native/network';
import { ToastProvider } from "../../services/ui-services/toast";
import { LoadingProvider } from "../../services/ui-services/loading";
import { AlertsProvider } from "../../services/ui-services/alerts";


@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
  styles: [`
  .ion-md-square-outline, .ion-md-checkbox {
    font-size: 18px;
  }
  `]
})
export class FrontPage implements OnInit {

  constructor(
    public nav: NavController,
    public fcm: FcmProvider,

    public modalCtrl: ModalController,
    public imagePicker: ImagePicker,
    public toast: ToastProvider,
    public platform: Platform,
    public transfer: FileTransfer,
    public loading: LoadingProvider,
    public events: Events,
    public sms: SMS,
    private _net: Network,
    private alert: AlertsProvider) {

    this.events.subscribe('auth:authenticated', () => {
      this.loading.dismissAllLoading();
    })
  }


  ionViewWillLeave() {
    this.fcm.getToken();

    // Listen to incoming messages
    this.fcm.listenToNotifications().pipe(
      tap(msg => {
        this.toast.newToast(msg['body']);
      })
    ).subscribe();
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this._net.onConnect().subscribe(() => {
        this.fcm.getToken();

        // Listen to incoming messages
        if (this.platform.is('cordova')) {
          this.fcm.listenToNotifications().pipe(
            tap(msg => {
              this.toast.newToast(msg['body']);
            })
          ).subscribe();
        }
      })

      this._net.onDisconnect().subscribe(() => {
        this.showNoNetworkAlert();
      })

    });
  }
  showNoNetworkAlert() {
    this.alert.newAlert("No Internet Connection", "Check your Wi-Fi or mobile data.",
      [
        {
          text: "OK",
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    );
  }

  vector() {
    this.nav.push(VectorPackagePage)
  }

  digitize() {
    this.nav.push(DigitizePackagePage)
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
}
