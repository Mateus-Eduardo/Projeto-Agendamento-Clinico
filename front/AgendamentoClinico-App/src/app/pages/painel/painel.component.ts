import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, } from '@angular/core';
import { WeatherApiService } from 'src/app/services/painel/weather-api.service';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})

export class PainelComponent implements OnInit {

  constructor(private weatherService: WeatherApiService) {}


  ngOnInit(): void {
    this.weatherService.getWeather('sao paulo')
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

  submitLocation(cityName: any){
    console.log(cityName.value);
    return false
  }
}
