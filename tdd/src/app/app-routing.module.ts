import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
const routes: Routes = [
  {path: '',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  data: { preload: true }}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
