import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StudentDao} from '../StudentDao';

@Component({
  selector: 'app-template-form-create',
  templateUrl: './template-form-create.component.html',
  styleUrls: ['./template-form-create.component.css']
})
export class TemplateFormCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: NgForm) {
    console.log(value.value)
    StudentDao.students.push(value.value)
  }


}
