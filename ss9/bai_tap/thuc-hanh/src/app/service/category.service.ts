import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly URL = 'http://localhost:3000/category';
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get(this.URL);
  }
}
