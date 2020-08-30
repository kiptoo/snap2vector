import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { SharedModule } from 'src/app/providers/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage],
  providers: [TitleCasePipe]
})
export class RegisterPageModule { }
