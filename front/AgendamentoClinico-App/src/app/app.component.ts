import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogado: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Subscreva-se a mudanças no estado de autenticação
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLogado = isAuthenticated;
    });
  }
}
