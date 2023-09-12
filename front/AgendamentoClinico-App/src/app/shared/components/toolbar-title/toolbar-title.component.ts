import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss']
})
export class ToolbarTitleComponent {

  @Input() title: string = "";

  iconFa = '';
  iconMat = '';

  @Input()
  set icon (value:string) {
    value.includes('fa-') ?
    this.iconFa = `icon-space-fa ${value}` :
    this.iconMat = value;
  }
  constructor() {}


}
