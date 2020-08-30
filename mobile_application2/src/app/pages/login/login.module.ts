import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/providers/shared.module';
import { UserProvider } from 'src/app/providers/user';
import { PrivacyPolicyPageModule } from '../privacy-policy/privacy-policy.module';
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrivacyPolicyPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  providers: [TitleCasePipe, UserProvider]
})
export class LoginPageModule { }
