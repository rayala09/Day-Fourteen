import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <h2>
      {{title}}
    </h2>
    <button type = "button" (click) = "notifyParent()">Click Me!</button>
  `,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
 @Input()  title: string;

 @Output() notify = new EventEmitter<string>();
 message: string = 'this is a message';

 notifyParent() {
   this.notify.emit(this.message);
 }
  constructor() { }

  ngOnInit() {
  }

}
