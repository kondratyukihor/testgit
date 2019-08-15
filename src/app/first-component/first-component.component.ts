import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cat} from '../app.component';


@Component({
    selector: 'app-first-component',
    templateUrl: './first-component.component.html',
    styleUrls: ['./first-component.component.sass']
})
export class FirstComponentComponent implements OnInit {
    @Input() cat: Cat;

    @Output() delId: EventEmitter<number> = new EventEmitter();
    @Output() upCat: EventEmitter<Cat> = new EventEmitter();

    number: number;

    constructor() {
    }

    ngOnInit() {
    }

    remove(id: any) {
        this.delId.emit(id);
    }

    emitCat() {
        this.upCat.emit(this.cat);
    }
}
