import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() popText = true;
  @Input() menuTitle = '';
  @Input() smallScreen = false;
  @Input() title: string = "";

  constructor(private router: Router) {
  }

  redirectToFuncionarioPage() {
    this.router.navigate(['/funcionario']);
  }
}
