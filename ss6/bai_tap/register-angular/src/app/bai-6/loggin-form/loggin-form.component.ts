import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-loggin-form',
  templateUrl: './loggin-form.component.html',
  styleUrls: ['./loggin-form.component.css']
})
export class LogginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]) ,
    pass: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: any) {
    if (registerForm.valid){
      console.log('thanh cong')
    }
  }
}
