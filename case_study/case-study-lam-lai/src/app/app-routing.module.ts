import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './home/body/body.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';


const routes: Routes = [
  {path: '',component:BodyComponent},
  {path:'customer' ,component:ListCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
