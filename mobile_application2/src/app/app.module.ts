import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './providers/shared.module';
import { IonicStorageModule } from '@ionic/storage';
import { DetailsPageModule } from './pages/details/details.module';
import { CropModalPageModule } from './pages/crop-modal/crop-modal.module';
import { ImageSelectionPageModule } from './pages/image-selection/image-selection.module';
import { ImagePreviewPageModule } from './pages/image-preview/image-preview.module';
import { RevisionImagePageModule } from './pages/revision-image/revision-image.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase/app';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {GooglePlus} from "@ionic-native/google-plus/ngx";
import { AngularFireStorageModule } from '@angular/fire/storage';
//import { Firebase } from '@ionic-native/firebase/ngx';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { CONFIGS } from './providers/config';
//import { AngularCropperjsModule } from 'angular-cropperjs';
//import { OrderTransform} from './providers/ordertransform.pipe';


// const firebaseConfig = {
//   apiKey: 'AIzaSyCAhXUlVY5wuR844A8S9vgHAL2ywercd98Y3-w',
//   authDomain: 'snaptovrtector.firebaseapp.com',
//   databaseURL: 'https://snaptovrtector.firebraseio.com',
//   projectId: 'snaptovector',
//   storageBucket: 'snaptovreector.appspeot.com',
//   messagingSenderId: '94225640372918',
//   appId: '1:942240372918:web:c56e88f13e536b676e'
// };
const firebaseConfig =CONFIGS.firebaseConfig;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     ImageSelectionPageModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    DetailsPageModule,
    CropModalPageModule,
  //  AngularCropperjsModule,
   ImagePreviewPageModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    FCM,

    Badge,
    //Firebase,

    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Initialize Firebase
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
} 
