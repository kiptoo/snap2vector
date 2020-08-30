import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompletedPage } from './completed.page';
import { DetailsPageModule } from '../details/details.module';

const routes: Routes = [
  {
    path: '',
    component: CompletedPage
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
  declarations: [CompletedPage]
})
export class CompletedPageModule { }
