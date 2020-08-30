import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';
import { SharedModule } from 'src/app/providers/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  declarations: [DetailsPage],
  entryComponents: [DetailsPage],
  exports: [DetailsPage]
})
export class DetailsPageModule { }
