import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject, ReplaySubject} from 'rxjs';
import {Cat} from '../../app.component';

const LOCAL_STORAGE = 'catArray';

@Injectable()

export class FunctionalityService {
    private subj = new BehaviorSubject<Cat[]>([]);

    items: Cat[] = [];

    constructor() {
        const tempCats = localStorage.getItem(LOCAL_STORAGE);
        if (tempCats) {
            this.items = JSON.parse(tempCats);
            this.subj.next(this.items);
        }

    }

    create(cat: Cat) {
        this.items.unshift(cat);
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(this.items));
        this.subj.next(this.items);
    }

    delete(id) {
        let index = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                index = i;
                break;
            }
        }
        this.items.splice(index, 1);
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(this.items));
        this.subj.next(this.items);
    }

    update(cat: Cat): void {
        this.items.forEach(item => {
            if (cat.id === item.id) {
                item.title = cat.title;
            }
            localStorage.setItem(LOCAL_STORAGE, JSON.stringify(this.items));
            this.subj.next(this.items);
        });
    }

    getAll() {
        return this.subj;
    }

    private updateStorage() {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(this.items));
    }
}


