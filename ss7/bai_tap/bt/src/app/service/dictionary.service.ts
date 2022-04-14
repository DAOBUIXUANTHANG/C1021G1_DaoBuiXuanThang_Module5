import { Injectable } from '@angular/core';
import {IWord} from '../modul/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dic: IWord[] = [{
    word: 'Hello',
    mean: 'Xin chào'
  },
    {
      word: 'Mango',
      mean: 'Quả xoài'
    },
    {
      word: 'gender',
      mean: 'giới tính'
    },
    {
      word: 'king',
      mean: 'vua'
    },
    {
      word: 'Turtle',
      mean: 'Con rùa'
    },
    {
      word: 'fish',
      mean: 'cá'
    },
    {
      word: 'Bear',
      mean: 'Con gấu'
    },
    {
      word: 'Fruits',
      mean: 'Trái cây, hoa quả'
    },{
      word: 'emperor',
      mean: 'hoàng đế'
    },
  ];
  constructor() { }

  getAll(){
    return this.dic;
  }
}
