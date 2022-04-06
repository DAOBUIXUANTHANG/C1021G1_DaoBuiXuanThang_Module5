import { Component, OnInit } from '@angular/core';
import {StudentDao} from '../StudentDao';
import {IStudent} from '../student/IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students : IStudent[] = StudentDao.students;
  constructor() { }

  ngOnInit(): void {
  }


}
