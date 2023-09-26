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
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})

export class PainelComponent implements OnInit {
  weather: any;
  cityName: string = "Barra Bonita, São Paulo";

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe(
      (res: any) => {
        console.log(res);


        const kelvinTemp = res.main.temp;
        const celsiusTemp = kelvinTemp - 273.15;

        console.log("Valor em Celsius (após a conversão):", celsiusTemp);

        this.weather = {
          ...res,
          main: {
            ...res.main,
            temp: celsiusTemp
          }
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submitLocation(cityName: HTMLInputElement) {
    this.getWeather(cityName.value);
    cityName.value = '';
    cityName.focus();
    return false;
  }
}
