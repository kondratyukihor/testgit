import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cat} from '../app.component';
import {FunctionalityService} from '../core/services/functionality.service';


@Component({
    selector: 'app-first-component',
    templateUrl: './first-component.component.html',
    styleUrls: ['./first-component.component.sass']
})
export class FirstComponentComponent implements OnInit {
    @Input() cat: Cat;
    @Input() id: number;

    @Output() delId: EventEmitter<number> = new EventEmitter();
    @Output() upCat: EventEmitter<Cat> = new EventEmitter();

    number: number;

    constructor(private test: FunctionalityService) {
    }

    ngOnInit() {
    }

    remove(id: number) {
        this.delId.emit(id);
    }

    emitCat() {
        this.upCat.emit(this.cat);
    }
}