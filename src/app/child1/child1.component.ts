import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-child1',
    templateUrl: './child1.component.html',
    styleUrls: ['./child1.component.css'],
})
export class Child1Component {

    @Output('onCreate') onCreate = new EventEmitter();

    onSubmit(event: Event) {
        event.preventDefault();
        let form = <any>event.target;
        let model = {
            id: form.id.value,
            name: form.name.value
        };

        // this.onCreate.emit(model);
        console.log(this.service.time);

        form.id.value = null;
        form.name.value = null;
    }

    constructor(private service: AppService) {
    }
}