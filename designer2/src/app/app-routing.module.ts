import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './guards/app.guard';

const routes: Routes = [
  { path: '', redirectTo: 'menu/dashboard', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AppGuard] },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }