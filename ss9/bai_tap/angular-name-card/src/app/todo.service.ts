import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL ='http://localhost:3000/Todo';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }


  create(todo: Todo){
    return this.http.post<Todo>(this.API_URL, todo);
  }

  delete(id: number){
    return this.http.delete<Todo>(this.API_URL + '/' + id);
  }


}
