import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-child1',
    templateUrl: './child1.component.html',
    styleUrls: ['./child1.component.css'],
})
export class Child1Component {
    constructor(private service: AppService) { }

    onSubmit(event: Event) {
        event.preventDefault();
        const form = <any>event.target;
        const model = {
            id: form.id.value,
            name: form.name.value
        };

        this.service.onSave(model);

        form.id.value = null;
        form.name.value = null;
    }
}