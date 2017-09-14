import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { AppAnimation } from '../app.animation';

@Component({
    selector: 'app-child2',
    templateUrl: './child2.component.html',
    styleUrls: ['./child2.component.css'],
    animations: AppAnimation
})
export class Child2Component {

    constructor(private service: AppService) {
        this.items = this.service.getArray;

    }
    items: any[] = [];

    onRemove(item) {
        this.service.onDelete(item);
    }
}
