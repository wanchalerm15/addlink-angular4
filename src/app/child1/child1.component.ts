import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child1',
    templateUrl: './child1.component.html',
    styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

    constructor() {
        this.lastname = 'Laoket';
        console.log(document.getElementById('hello'));
    }

    firstname: string = 'Wanchaloem';
    lastname: string;

    ngOnInit() {
        console.log(document.getElementById('hello'));
    }
}