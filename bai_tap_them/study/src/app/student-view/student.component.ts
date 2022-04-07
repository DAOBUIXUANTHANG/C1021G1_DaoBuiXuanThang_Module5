import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from './IStudent';

@Component({
  selector: 'app-student-view',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // student: IStudent ={
  //   id: 1,
  //   name: "Dragon Lee",
  //   address: "Da Nang",
  //   age: 244,
  //   mark: 4,
  // };

  // color:string;

  @Input()
  student : IStudent ;

  @Output()
  newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getMark(mark: string){
    this.student.mark = Number(mark);
  }

  addNewItem(value : string){
    this.newItemEvent.emit(value);
  }
  //
  // getColor(colors:string){
  //   this.color = colors;
  // }
}
