import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import { CropModalPageModule } from './pages/crop-modal/crop-modal.module';
import { CropModalPage } from '../crop-modal/crop-modal.page';
import { ImageSelectionPage } from './image-selection.page';
import { SharedModule } from 'src/app/providers/shared.module';
import { ImageProvider } from 'src/app/providers/image';
import { CheckoutPageModule } from '../checkout/checkout.module';
import { CropModalPageModule } from '../crop-modal/crop-modal.module';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
//import { CropperComponent } from 'angular-cropperjs';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { Camera } from '@ionic-native/camera/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CropModalPageModule,
    CheckoutPageModule,
    AngularCropperjsModule
    //CropModalPage,
    //CropperComponent
  ],
  declarations: [ImageSelectionPage],
  entryComponents: [ImageSelectionPage],
  exports: [ImageSelectionPage],
  providers: [ImageProvider,ImagePicker,Crop,Camera,File]
})
export class ImageSelectionPageModule { }
