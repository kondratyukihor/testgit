import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

}
interface Calc {
  add(num: number): number;
  minus(num: number): number;
  multiply(num: number): number;
  divide(num: number): number;
  print(): void;
}

class Calculator implements Calc {
  private res: number = 0;

  add(num: number) {
    return this.res = num + this.res ;
  }

  minus(num: number) {
    return this.res = this.res - num;
  }

  multiply(num: number) {
    return this.res = num * this.res;
  }

  divide(num: number) {
    return this.res = this.res / num;
  }

  print(): void {
    console.log(this.res);
  }
}

let actions = new Calculator();

actions.add(15);
actions.minus(25);
actions.multiply(35);
actions.divide(45);
actions.print();
