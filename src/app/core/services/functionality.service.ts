import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject, ReplaySubject} from 'rxjs';
import {Cat} from '../../app.component';

const LOCAL_STORAGE = 'catArray';

@Injectable()

export class FunctionalityService {
    private subj = new BehaviorSubject<Cat[]>([]);

    cat: Cat = new Cat();
    private items = [];

    constructor() {
        const tempCats = localStorage.getItem(LOCAL_STORAGE);
        if (tempCats) {
            this.items = JSON.parse(tempCats);
            this.subj.next(this.items);
        }
    }

    create(id: number, arr: any[]) {
        this.items.unshift(Cat);
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(this.items));
    }

    delete(id) {
        this.items.splice(id, 1);
        localStorage.removeItem('catArray');
    }

    getAll() {
        return this.subj;
    }

    private updateStorage() {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(this.items));
    }
}


