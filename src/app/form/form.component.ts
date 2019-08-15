import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cat} from '../app.component';
import {FunctionalityService} from '../core/services/functionality.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Output() crCat: EventEmitter<Cat> = new EventEmitter();
  cat: Cat = new Cat();

  constructor(private functionalityService: FunctionalityService) { }


  ngOnInit() {
  }

  create(cat: Cat)  {
    cat.id = this.uniqueID();
    this.crCat.emit(cat);
    this.cat = new Cat();
  }

  private uniqueID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

}
