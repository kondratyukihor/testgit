import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject, ReplaySubject} from 'rxjs';
import {Cat} from '../../app.component';

const LOCAL_STORAGE = 'catArray';

@Injectable()

export class FunctionalityService {
    private subj = new BehaviorSubject(0);
    constructor() {
    }
    cat: Cat = new Cat();
    items = [];

    create(id: number, arr: any[]) {
        this.items.unshift(Cat);
        localStorage.setItem(id.toString(), JSON.stringify(arr));
    }
    delete(no: number) {
        this.items.splice(no, 1);
        localStorage.removeItem('test');
    }

    getAll() {
        const cats = localStorage.getItem(LOCAL_STORAGE);
        return JSON.parse(cats);
    }

    setSubj(numb: number) {
        this.subj.next(numb);
    }

    getSubj(): any {
        return this.subj;
    }

    writeInLocalStorage(id: number, arr: any[]) {
        localStorage.setItem(id.toString(), JSON.stringify(arr));
    }
}


