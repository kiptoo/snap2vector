import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { DetailsPageModule } from '../details/details.module';
import { SMS } from '@ionic-native/sms/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage],
  providers: [SMS,FCM]
})
export class HomePageModule { }
