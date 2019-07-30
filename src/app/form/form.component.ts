import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cat} from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() kat: Cat;
  @Output() crCat: EventEmitter<Cat> = new EventEmitter();

  cat: Cat = new Cat();


  constructor() { }

  ngOnInit() {
  }

  create() {
    this.cat.id = 11;
    this.crCat.emit(this.cat);
    this.cat = new Cat();
  }

}
