import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  URL = "http://localhost:3000/customerList";
  regURL ="http://localhost:3000/customerTypeList";
  constructor(private http : HttpClient) { }

  getAllCustomer(){
    return this.http.get(this.URL);
  }


}
