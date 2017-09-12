import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  @Input('getItem') items = [];
  @Output('getItemChange') getItemChange = new EventEmitter();

  onRemove(item) {
    let items = this.items.filter(i => i != item);
    // this.getItemChange.emit(items);
    this.service.time = new Date();
  }
}
