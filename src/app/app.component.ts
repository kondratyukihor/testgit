import {Component, OnInit} from '@angular/core';
import {FunctionalityService} from './core/services/functionality.service';


export class Cat {
    id: number;
    title: string;
    url: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    cat: Cat = new Cat();
    items: Cat[] = [];

    constructor(private functionalityService: FunctionalityService) {

    }

    remove(no: number): void {
        this.functionalityService.delete(no);
    }

    update(cat: Cat): void {
        this.items.forEach(item => {
            if (cat.id === item.id) {
                item.title = cat.title;
            }
        });
    }

    create(cat: Cat) {
        this.functionalityService.create(1, this.items);
    }

    ngOnInit(): void {
        this.functionalityService.getAll().subscribe(value => console.log(value));
    }
}


