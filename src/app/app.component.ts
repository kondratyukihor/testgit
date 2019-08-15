import {Component, OnInit} from '@angular/core';
import {FunctionalityService} from './core/services/functionality.service';

export class Cat {
    id: any;
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

    delete(id: any): void {
        this.functionalityService.delete(id);
    }

    create(cat: Cat)  {
        this.functionalityService.create(cat);
    }


    update(cat: Cat): void {
        this.functionalityService.update(cat);
    }

    ngOnInit(): void {
       this.functionalityService.getAll().subscribe((cats: Cat[]) => this.items = cats);
    }

}


