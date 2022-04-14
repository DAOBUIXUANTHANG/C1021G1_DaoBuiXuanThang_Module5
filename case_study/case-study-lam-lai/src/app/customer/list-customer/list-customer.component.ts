import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../ICustomer';
import {CustomerList} from '../CustomerList';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../model/Customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer :Customer[];
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(value=>{
      this.listCustomer=value;
      console.log(this.listCustomer)
    })

  }

  // showList():ICustomer[]{
  //   console.log(this.listCustomer);
  //   return this.listCustomer;
  // }

}
