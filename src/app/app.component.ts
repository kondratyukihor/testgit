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
    items = [
        {
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://placekitten.com/200/198'
        },
        {
            id: 2,
            title: 'reprehenderit est deserunt velit ipsam',
            url: 'https://placekitten.com/200/202',
        },
        {
            id: 3,
            title: 'officia porro iure quia iusto qui ipsa ut modi',
            url: 'https://placekitten.com/200/203',
        },
        {
            id: 4,
            title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
            url: 'https://placekitten.com/200/204',
        },
        {
            id: 5,
            title: 'natus nisi omnis corporis facere molestiae rerum in',
            url: 'https://placekitten.com/200/205',
        },
        {
            id: 6,
            title: 'accusamus ea aliquid et amet sequi nemo',
            url: 'https://placekitten.com/200/206',
        },
        {
            id: 7,
            title: 'officia delectus consequatur vero aut veniam explicabo molestias',
            url: 'https://placekitten.com/200/207',
        },
        {
            id: 8,
            title: 'aut porro officiis laborum odit ea laudantium corporis',
            url: 'https://placekitten.com/200/208',
        },
        {
            id: 9,
            title: 'qui eius qui autem sed',
            url: 'https://placekitten.com/200/209',
        },
        {
            id: 10,
            title: 'beatae et provident et ut vel',
            url: 'https://placekitten.com/200/200',
        }

    ];

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
        this.functionalityService.getSubj().subscribe((data) => console.log(data));

        this.functionalityService.writeInLocalStorage(1, this.items);
    }
}


