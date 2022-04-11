import { Component, OnInit } from '@angular/core';
import {ICountry} from './ICountry';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bt-register-form',
  templateUrl: './bt-register-form.component.html',
  styleUrls: ['./bt-register-form.component.css']
})
export class BtRegisterFormComponent implements OnInit {
  countryList : ICountry[] = [
    new ICountry('1', 'China'),
    new ICountry('2', 'USA'),
    new ICountry('3', 'US'),
    new ICountry('4', 'VietNam'),
    new ICountry('5', 'Japan'),
    new ICountry('6', 'Korea')
  ]
  passwordCheck : string;

  registerForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('',[Validators.pattern(this.passwordCheck)]),
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required,this.checkAge]),
      gender :new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.pattern( /^\+84\d{9,10}$/)]),
    });

  }

  checkPass(value1 : AbstractControl){
    const value = value1.value;
    if(value.password == value.confirmPassword){
      return null;
    } else {
      return {'passNotMatch': true};
    }
  }

  checkAge(ageCheck: AbstractControl){
    const birth = new Date(ageCheck.value);
    const birthday = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthday);
    console.log(time.getUTCFullYear());
    const age = time.getUTCFullYear() - 1970;
    console.log(age);
    if(age < 18) {
      return {'ageUnder': true}
    }
    return null;
  }

  onSubmit(registerForm: any) {
    if (this.registerForm.valid){
      this.registerForm = registerForm;
      console.log('thanh cong')
    } else {
      console.log('sai r')
    }
  }

  get password(){
    return this.registerForm.get('password')
  }
  //
  getPassword(pass : string){
    this.passwordCheck = pass;
  }
}
