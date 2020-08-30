import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'orders',
        loadChildren: '../orders/orders.module#OrdersPageModule'
      },
      {
        path: 'vector-package',
        loadChildren: '../vector-package/vector-package.module#VectorPackagePageModule'
      },
      {
        path: 'digitize-package',
        loadChildren: '../digitize-package/digitize-package.module#DigitizePackagePageModule'
      },
      {
        path: 'image-selection',
        loadChildren: '../image-selection/image-selection.module#ImageSelectionPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }