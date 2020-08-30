import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewPage } from './new.page';
import { DetailsPage } from '../details/details.page';
import { DetailsPageModule } from '../details/details.module';

const routes: Routes = [
  {
    path: '',
    component: NewPage
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
  declarations: [NewPage]
})
export class NewPageModule { }
