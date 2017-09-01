import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    hidden: boolean = true;

    color: string = 'blue';

    switch: number = 1;

    arrays = [
        { id: 1, name: 'name 1' },
        { id: 2, name: 'name 2' },
        { id: 3, name: 'name 3' },
        { id: 4, name: 'name 4' },
        { id: 5, name: 'name 5' },
        { id: 6, name: 'name 6' },
        { id: 7, name: 'name 7' },
        { id: 8, name: 'name 8' },
        { id: 9, name: 'name 9' },
        { id: 10, name: 'name 10' },
    ];

    constructor() {
    }

}
