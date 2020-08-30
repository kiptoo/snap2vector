import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPage } from './checkout.page';
import { CardModalPageModule } from '../card-modal/card-modal.module';
import { PaymentProvider } from 'src/app/providers/payment';
import { OrderProvider } from 'src/app/providers/order';
import { AngularCropperjsModule } from 'angular-cropperjs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardModalPageModule,
    AngularCropperjsModule
  ],
  declarations: [CheckoutPage],
  entryComponents: [CheckoutPage],
  exports: [CheckoutPage],
  providers: [PaymentProvider, OrderProvider]
})
export class CheckoutPageModule { }
