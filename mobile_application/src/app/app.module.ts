import { AngularFireAuthModule } from 'angularfire2/auth';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { DigitizePackagePage } from '../pages/digitize-package/digitize-package';
import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase';
import { IonicImageLoader } from 'ionic-image-loader';
import * as firebase from "firebase";
import { SMS } from '@ionic-native/sms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from "./app.component";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { NotificationsPage } from "../pages/notifications/notifications";

import { PreviewModalPage } from "../components/preview-modal/preview-modal";
import { PhotoModalComponent } from "../components/photo-modal/photo-modal";
import { Camera } from "@ionic-native/camera";
import { FileTransfer } from "@ionic-native/file-transfer";
import { ImagePicker } from "@ionic-native/image-picker";
import { CheckoutPage } from "../pages/checkout/checkout";
import { Stripe } from "@ionic-native/stripe";
import { FcmProvider } from '../services/FCMProvider.service';
import { TabsPage } from '../pages/tabs/tabs';
import { OrdersPage } from '../pages/orders-page/orders-page';
import { VectorPackagePage } from './../pages/vector-package/vector-package';
import { FrontPage } from '../pages/front/front';
import { ImageSelectionPage } from '../pages/image-selection/image-selection';
import { CardModalPage } from '../pages/card-modal/card-modal';
import { PhoneModalPage } from '../pages/phone-modal/phone-modal';
import { Crop } from '@ionic-native/crop';
import { VectoredPage } from '../pages/vectored/vectored';
import { TitleCasePipe } from '@angular/common';
import { RevisionImagePage } from '../pages/revision-image/revision-image';
import { CompanyModalPage } from '../pages/company-modal/company-modal';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DataProvider } from '../services/core/data';
import { ErrorHandlerProvider } from '../services/core/error-handler';
import { StorageService } from '../services/core/storage';
import { Network } from '@ionic-native/network';
import { LoadingProvider } from '../services/ui-services/loading';
import { ToastProvider } from '../services/ui-services/toast';
import { AlertsProvider } from '../services/ui-services/alerts';
import { InterceptorProvider } from '../services/core/interceptor';
import { UserProvider } from '../services/component-services/user';
import { OrderProvider } from '../services/component-services/order';
import { ImageProvider } from '../services/component-services/image';
import { PaymentProvider } from '../services/component-services/payment';
import { VectorProvider } from '../services/component-services/vector';
import { ImagePreviewPage } from '../pages/image-preview/image-preview';

const firebaseConfig = {
  // your firebase web config
  apiKey: "AIzaSyDgBLcujUHBKjLXoz51JK7CL1Q2BR6WcG8",
  authDomain: "snaptovector.firebaseapp.com",
  databaseURL: "https://snaptovector.firebaseio.com",
  projectId: "snaptovector",
  storageBucket: "snaptovector.appspot.com",
  messagingSenderId: "942240372918",
  appId: "1:942240372918:web:c56e88f13e536b6e"
}
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    NotificationsPage,

    PreviewModalPage,
    PhotoModalComponent,
    CheckoutPage,
    TabsPage,
    OrdersPage,
    VectorPackagePage,
    DigitizePackagePage,
    FrontPage,
    ImageSelectionPage,
    CardModalPage,
    PhoneModalPage,
    CompanyModalPage,
    VectoredPage,
    RevisionImagePage,
    PrivacyPolicyPage,
    ImagePreviewPage
    // TestDataProviderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    NotificationsPage,

    PreviewModalPage,
    PhotoModalComponent,
    CheckoutPage,
    TabsPage,
    OrdersPage,
    VectorPackagePage,
    DigitizePackagePage,
    FrontPage,
    ImageSelectionPage,
    CardModalPage,
    PhoneModalPage,
    CompanyModalPage,
    VectoredPage,
    RevisionImagePage,
    PrivacyPolicyPage,
    ImagePreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
    Camera,
    FileTransfer,
    ImagePicker,
    Stripe,
    Firebase,
    FcmProvider,
    SMS,
    Crop,
    TitleCasePipe,
    Network,
    FileOpener,
    SocialSharing,
    DataProvider,
    ErrorHandlerProvider,
    StorageService,
    LoadingProvider,
    ToastProvider,
    AlertsProvider,
    UserProvider,
    OrderProvider,
    ImageProvider,
    PaymentProvider,
    VectorProvider,
  ]
})

export class AppModule {
}
