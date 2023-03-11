import { Component } from '@angular/core';
import { Operators } from '../classe/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  mainDisplay: string;
  numbers: [string,string];
  operator: Operators | null;
  previousResultDisplay: string;

  constructor() {
    this.mainDisplay = "0";
    this.numbers = ["0","0"];
    this.operator = new Operators();
    this.previousResultDisplay = "";
  }

  async registerNumber(numero: string){
    if (this.operator!.selected === null) {
      if(this.numbers[0] === "0"){
        this.numbers[0] = numero;  
      } else {
        this.numbers[0] += numero;
      }
    } else {
      if(this.numbers[1] === "0"){
        this.numbers[1] = numero;  
      } else {
        this.numbers[1] += numero;
      }
    }
    this.refreshDisplay();
  }

  async setOperator(operator: {symbol: string, calc: any}){
    if(this.numbers[0] != "0" && this.numbers[1] == "0"){
      this.operator!.select(operator);
    } else if(this.numbers[1] != "0") {
      this.solveOperation();
      this.operator!.select(operator);
    }
    this.refreshDisplay();
  }

  solveOperation(): void{
    let result = String(this.calculate());
    this.previousResultDisplay = this.formatNumber(this.numbers[0]) + " " + this.operator!.selected!.symbol + " " + this.formatNumber(this.numbers[1]) + " = " + this.formatNumber(result);
    this.numbers[0] = result;
    this.numbers[1] = "0";
    this.operator!.deselect();
    this.refreshDisplay();
  }

  calculate(): string{
    let num1: number = Number(this.numbers[0]);
    let num2: number = Number(this.numbers[1]);
    
    return this.operator!.selected!.calc(num1,num2);
  }

  formatNumber(num: string): string{
    let char = num[0];
    return (char === "-")? `(${num})` : num;
  }

  refreshDisplay(){
    let display: string = this.formatNumber(this.numbers[0]);
    if (this.operator!.selected != null) {
      display += " "+this.operator!.selected!.symbol+" ";
      if(this.numbers[1] != "0") display += this.formatNumber(this.numbers[1]);
    }
    this.mainDisplay = display;
  }

  

  specialButton(btn: string){
    switch (btn) {
      case "changeSign":
        this.changeSign();
        break;
    }
  }

  changeSign(){
    if (this.operator!.selected === null && this.numbers[0] != "0") {
      if (this.numbers[0][0] === "-")
        this.numbers[0] = this.numbers[0].replace("-", "");
      else
        this.numbers[0] = "-" + this.numbers[0];
    } else if(this.numbers[1] != "0") {
      if (this.numbers[1][0] === "-")
        this.numbers[1] = this.numbers[1].replace("-", ""); 
      else
        this.numbers[1] = "-" + this.numbers[1];
    }
    this.refreshDisplay();
  }
  
  
}