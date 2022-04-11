import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentDao} from '../StudentDao';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // @ts-ignore
  reactiveForm :FormGroup;


  constructor() {
    // @ts-ignore
    this.reactiveForm = new FormGroup({
      id: new FormControl('',Validators.required),
      name: new FormControl('',[Validators.required,Validators.min(5)]),
      address: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
      mark: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submit() {
    StudentDao.students.push(this.reactiveForm.value)
  }
}
