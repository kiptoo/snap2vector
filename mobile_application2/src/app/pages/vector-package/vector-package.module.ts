import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VectorPackagePage } from './vector-package.page';
import { ImageSelectionPageModule } from '../image-selection/image-selection.module';
import { CropModalPageModule } from '../crop-modal/crop-modal.module';

const routes: Routes = [
  {
    path: '',
    component: VectorPackagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageSelectionPageModule,
    CropModalPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VectorPackagePage]
})
export class VectorPackagePageModule { }
