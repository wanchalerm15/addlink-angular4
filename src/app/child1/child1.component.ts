import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppService } from '../app.service';

@Component({
    selector: 'app-child1',
    templateUrl: './child1.component.html',
    styleUrls: ['./child1.component.css'],
})
export class Child1Component {
    constructor(private service: AppService, private router: Router,
        private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.forEach(param => this.id = param['id'] || null);
        this.activatedRoute.data.forEach(value => this.name = value['name'] || null);
    }

    id: string;
    name: string;

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

        this.router.navigate(['/', 'child2'], { queryParams: { hello: 'this is send form page' } });
    }
}