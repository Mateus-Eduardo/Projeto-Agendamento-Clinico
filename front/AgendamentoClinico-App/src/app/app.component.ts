import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AgendamentoClinico-App';
  isLogado: boolean = false

  constructor(private service: AuthService) {
    
  }

  ngOnInit(): void {
    const variavel =  this.service.isLogado
    console.log("App " + variavel);

    this.isLogado = variavel;
  }
}
