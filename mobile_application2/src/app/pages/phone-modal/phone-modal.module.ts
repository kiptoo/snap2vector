import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneModalPage } from './phone-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PhoneModalPage],
  entryComponents: [PhoneModalPage],
  exports: [PhoneModalPage]
})
export class PhoneModalPageModule { }
