import { Injectable } from '@angular/core';
import {Customer} from '../model/Customer';
import {ICustomer} from '../ICustomer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // public customerList: ICustomer[]= [{
  //   name: "Jassmine Lee",
  //   birthday: "20/12/2022",
  //   gender: true,
  //   idCard: "191222333",
  //   phone: "0902333222"
  // },
  //   {
  //     name: "Tran Anh Trong",
  //     birthday: "20/12/2000",
  //     gender: false,
  //     idCard: "191222333",
  //     phone: "0902333222"
  //   },
  //   {
  //     name: "Dragon Lee",
  //     birthday: "20/12/1990",
  //     gender: false,
  //     idCard: "191222333",
  //     phone: "0902333222"
  //   },
  //   {
  //     name: "Duong Cong minh son",
  //     birthday: "20/12/2001",
  //     gender: true,
  //     idCard: "191222333",
  //     phone: "0902333222"
  //   },
  //   {
  //     name: "Hoang duc tinh",
  //     birthday: "20/12/2022",
  //     gender: true,
  //     idCard: "191222333",
  //     phone: "0902333222"
  //   },
  //   {
  //     name: "Lee minh tai",
  //     birthday: "20/12/2022",
  //     gender: true,
  //     idCard: "191222333",
  //     phone: "0902333222"
  //   },]

  URL = "http://localhost:3000/customerList";
  regURL ="http://localhost:3000/customerTypeList";

  constructor(private http : HttpClient) { }

  getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.URL);
  }


}
