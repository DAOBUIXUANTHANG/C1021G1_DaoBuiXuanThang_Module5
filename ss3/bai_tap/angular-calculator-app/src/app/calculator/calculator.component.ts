import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  // erorr: string;
  constructor() { }

  ngOnInit(): void {
  }

  calculation(num1: number , num2: number, operator: string){
    switch (operator){
      case '+':
        this.result = num1 + num2;
        break;
      case '-':
        this.result = num1 - num2;
      // tslint:disable-next-line:no-switch-case-fall-through
      case '/':
        this.result = num1 / num2;
        break;
      case '*':
        this.result = num1 * num2;
        break;
    }
  }

}
