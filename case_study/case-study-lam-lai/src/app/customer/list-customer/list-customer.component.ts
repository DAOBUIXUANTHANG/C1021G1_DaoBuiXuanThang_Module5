import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../ICustomer';
import {CustomerList} from '../CustomerList';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer :ICustomer[] = CustomerList.customerList;
  constructor() { }

  ngOnInit(): void {
  }

  showList():ICustomer[]{
    console.log(this.listCustomer);
    return this.listCustomer;
  }

}
