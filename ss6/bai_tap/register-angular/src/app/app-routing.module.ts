import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogginFormComponent} from './bai-6/loggin-form/loggin-form.component';
import {BtRegisterFormComponent} from './bai-6/bt-register-form/bt-register-form.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login-form', component:LogginFormComponent},
  {path: 'register-form', component:BtRegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
