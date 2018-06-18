import { Component } from '@angular/core';


@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']


})

export class ParentComponent {
  childTitle: string = 'Text passed to child';

}
