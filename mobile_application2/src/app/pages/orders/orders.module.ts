import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdersPage } from './orders.page';
import { DetailsPageModule } from '../details/details.module';
import { OrderProvider } from 'src/app/providers/order';
import { SMS } from '@ionic-native/sms/ngx';
import { SharedModule } from 'src/app/providers/shared.module';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
//import { PhoneModalPageModule } from '../phone-modal/phone-modal.module';
import { ImagePreviewPageModule } from '../image-preview/image-preview.module';
import { RevisionImagePageModule } from '../revision-image/revision-image.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer'; 
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64/ngx';
import { OrderTransform} from 'src/app/providers/ordertransform.pipe';
const routes: Routes = [
  {
    path: '',
    component: OrdersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ImagePreviewPageModule,
    RevisionImagePageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OrdersPage,OrderTransform],
  providers: [OrderProvider, SMS, AndroidPermissions,SocialSharing,Base64,FileOpener]
})
export class OrdersPageModule { }
