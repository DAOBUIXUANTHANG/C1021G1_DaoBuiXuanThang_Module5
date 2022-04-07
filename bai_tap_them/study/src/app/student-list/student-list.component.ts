import { Component, OnInit } from '@angular/core';
import {StudentDao} from '../StudentDao';
import {IStudent} from '../student-view/IStudent';

@Component({
  selector: 'app-student-view-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students : IStudent[] = StudentDao.students;
  student: IStudent;

  constructor() { }

  ngOnInit(): void {
  }

  getStudent(student: IStudent) : IStudent{
    this.student = student;
    return this.student;
  }
}
