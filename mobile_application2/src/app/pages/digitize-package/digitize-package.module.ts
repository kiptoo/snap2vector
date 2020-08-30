import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DigitizePackagePage } from './digitize-package.page';
//import { ImageSelectionPageModule } from '../image-selection/image-selection.module';
import { ImageSelectionPageModule } from '../image-selection/image-selection.module';

const routes: Routes = [
  {
    path: '',
    component: DigitizePackagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageSelectionPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DigitizePackagePage]
})
export class DigitizePackagePageModule { }
