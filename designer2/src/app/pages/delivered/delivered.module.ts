import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveredPage } from './delivered.page';
import { DetailsPageModule } from '../details/details.module';

const routes: Routes = [
  {
    path: '',
    component: DeliveredPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeliveredPage]
})
export class DeliveredPageModule { }
