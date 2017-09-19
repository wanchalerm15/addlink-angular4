import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-guard',
	templateUrl: './guard.component.html',
	styleUrls: ['./guard.component.css']
})
export class GuardComponent {
	message: string = '';
	username: string = sessionStorage.getItem('authen');

	onPostMessage() {
		if (this.message.trim() == '') return;
		alert(this.message);
	}
}
