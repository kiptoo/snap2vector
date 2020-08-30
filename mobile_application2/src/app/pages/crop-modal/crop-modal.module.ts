import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { AngularCropperjsModule } from 'angular-cropperjs';
//import { CropperComponent } from 'angular-cropperjs';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule } from '@ionic/angular';

import { CropModalPage } from './crop-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CropModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularCropperjsModule,
    //CropperComponent
   // RouterModule.forChild(routes)
  ],
  declarations: [CropModalPage],
  entryComponents: [CropModalPage],
  exports: [CropModalPage],
  providers: [Crop,Camera,File]
})
export class CropModalPageModule {}
