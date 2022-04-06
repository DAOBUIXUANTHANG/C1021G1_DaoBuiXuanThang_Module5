import { Component, OnInit } from '@angular/core';
import {IStudent} from './IStudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: IStudent ={
    id: 1,
    name: "Dragon Lee",
    address: "Da Nang",
    age: 244,
    mark: 4,
  };
  color:string;


  constructor() { }

  ngOnInit(): void {
  }

  getMark(mark: string){
    this.student.mark = Number(mark);
  }

  getColor(colors:string){
    this.color = colors;
  }
}
