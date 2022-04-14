import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];
  private readonly API_URL = 'http://localhost:3000/product';
  productList: Product[];
  constructor(private http: HttpClient) { }
  getAll(): Observable<any>{
    console.log('all');
    return this.http.get(this.API_URL);
  }
  saveProduct(product): Observable<Product> {
    const header = { 'content-type': 'application/json'};
    console.log(product);
    const body = JSON.stringify(product);
    console.log(body);
    return this.http.post<Product>(this.API_URL, body, {headers: header});
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API_URL}/${id}`);
  }
  findById(id: number, productList: Product[]): Product{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.productList.length; i++){
      console.log(22);
      if (productList[i].id === id){
        return this.productList[i];
      }
    }
  }

  updateCategory(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/${id}`, product);
  }
}
