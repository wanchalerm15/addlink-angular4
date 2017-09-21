import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm, NgControl } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    model = {
        name: '',
        old: ''
    };

    onNgModelSubmit() {
        console.log(this.model);
    }
    ngModelCheck(validate: NgModel, key: string) {
        if (!validate.errors) return;
        return validate.invalid && validate.touched && key in validate.errors;
    }


    onNgFormSubmit(form: NgForm) {
        if (form.invalid) return;
        console.log(form.value);
    }

    ngFormCheck(validate: NgControl, key: string) {
        if (!validate) return;
        if (!validate.errors) return;
        return validate.invalid && validate.touched && key in validate.errors;
    }
}
