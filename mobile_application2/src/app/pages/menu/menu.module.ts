import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { AngularFireModule } from '@angular/fire';
import { CardModalPageModule } from '../card-modal/card-modal.module';
import { CompanyModalPageModule } from '../company-modal/company-modal.module';
import { PhoneModalPageModule } from '../phone-modal/phone-modal.module';
import { CardModalPage } from '../card-modal/card-modal.page';
import { CompanyModalPage } from '../company-modal/company-modal.page';
import { PhoneModalPage } from '../phone-modal/phone-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
        loadChildren: '../tabs/tabs.module#TabsPageModule'
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireModule,
    CardModalPageModule,
    CompanyModalPageModule,
    PhoneModalPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }