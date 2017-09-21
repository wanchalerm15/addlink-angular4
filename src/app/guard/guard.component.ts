import { Component, OnInit } from '@angular/core';
import { ICanDeactivate } from '../app.guard';

@Component({
	selector: 'app-guard',
	templateUrl: './guard.component.html',
	styleUrls: ['./guard.component.css']
})
export class GuardComponent implements ICanDeactivate {

	confirmAction(): boolean {
		return this.message.trim() === '' ?
			true : confirm('Are you sure?');
	}

	message: string = '';
	username: string = sessionStorage.getItem('authen');

	onPostMessage() {
		if (this.message.trim() == '') return;
		alert(this.message);
	}
}
