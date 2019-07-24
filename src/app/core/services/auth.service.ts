import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private subj = new ReplaySubject();

    constructor() {
    }

    setSubj(numb: number) {
        this.subj.next(numb);
    }

    getSubj(): any {
        return this.subj;
    }

    writeInLocalStoraje(id: number, arr: any[]) {
        localStorage.setItem(id.toString(), JSON.stringify(arr));
    }

    read(): any {
        const data = localStorage.getItem('test');
        return JSON.parse(data);
    }
}
