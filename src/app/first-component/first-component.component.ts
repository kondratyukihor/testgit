import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cat} from '../app.component';
import {AuthService} from "../core/services/auth.service";


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

    constructor(private test: AuthService) {
    }

    ngOnInit() {
    }

    remove(id: number) {
        this.delId.emit(id);
    }

    setNumber() {
        this.test.setSubj(this.number);
    }

    emitCat() {
        this.upCat.emit(this.cat);
    }
}
