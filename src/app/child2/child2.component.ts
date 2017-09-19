import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { AppAnimation } from '../app.animation';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-child2',
    templateUrl: './child2.component.html',
    styleUrls: ['./child2.component.css'],
    animations: AppAnimation
})
export class Child2Component {

    constructor(private service: AppService, private activatedRoute: ActivatedRoute) {
        this.items = this.service.getArray;
        this.activatedRoute.queryParams.forEach(query => this.hello = query['hello']);

    }
    items: any[] = [];
    hello: string;

    onRemove(item) {
        this.service.onDelete(item);
    }
}
