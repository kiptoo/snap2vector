import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardModalPage } from './card-modal.page';
import { UserProvider } from 'src/app/providers/user';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [CardModalPage],
  entryComponents: [CardModalPage],
  exports: [CardModalPage],
  providers: [UserProvider]
})
export class CardModalPageModule { }
