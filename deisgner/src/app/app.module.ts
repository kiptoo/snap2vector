import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/login.component/login.component';
import { IndexComponent } from './ui/index.component/index.component';
import { LogoutComponent } from './ui/logout.component/logout.component';
import { CommonService } from './services/common.service';
import { FilterPipe } from './pipe/searchFilter.pipe';
import * as firebase from 'firebase';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }

];
const firebaseConfig = {
  // your firebase web config
    apiKey: 'AIzaSyAFbTV9z20qGmR-e24ZkHOtSKemVHKcnhQ',
    authDomain: 'snaptovector.firebaseapp.com',
    databaseURL: 'https://snaptovector.firebaseio.com',
    projectId: 'snaptovector',
    storageBucket: 'snaptovector.appspot.com',
    messagingSenderId: '942240372918'
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    LogoutComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SlimLoadingBarModule.forRoot()
  ],
  exports: [SlimLoadingBarModule],
  providers: [
    FormBuilder,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
