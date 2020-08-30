import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: DashboardPage,
    children: [
      {
        path: 'new',
        loadChildren: '../new/new.module#NewPageModule'
      },
      {
        path: 'revision',
        loadChildren: '../revision/revision.module#RevisionPageModule'
      },
      {
        path: 'completed',
        loadChildren: '../completed/completed.module#CompletedPageModule'
      },
      {
        path: 'delivered',
        loadChildren: '../delivered/delivered.module#DeliveredPageModule'
      },
      {
        path: 'details',
        loadChildren: '../details/details.module#DetailsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/new',
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
  declarations: [DashboardPage]
})
export class DashboardPageModule { }