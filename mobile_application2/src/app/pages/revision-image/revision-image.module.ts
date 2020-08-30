import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RevisionImagePage } from './revision-image.page';
import { ImagePreviewPageModule } from '../image-preview/image-preview.module';
import { OrderProvider } from 'src/app/providers/order';
import { SMS } from '@ionic-native/sms/ngx';
import { SharedModule } from 'src/app/providers/shared.module';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AngularCropperjsModule } from 'angular-cropperjs';

// const routes: Routes = [
//   {
//     path: '',
//     component: RevisionImagePage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ImagePreviewPageModule,
    AngularCropperjsModule,
  //  RevisionImagePage
    //RouterModule.forChild(routes)
  ],
  declarations: [RevisionImagePage],
    entryComponents: [RevisionImagePage],
  exports: [RevisionImagePage],
  providers: [OrderProvider, SMS, AndroidPermissions, FileOpener, SocialSharing]
})
export class RevisionImagePageModule { }
