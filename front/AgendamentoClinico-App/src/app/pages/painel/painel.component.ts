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
        animate('550ms',
          style({ opacity: 2 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 2 }),
        animate('750ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('550ms',
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
  greetings: string = '';
  isLoading: boolean = true;
  iconMapping: { [key: string]: string } = {
    '01d': 'clear-sky.png',
    '02d': 'few-clouds.png',
    '03d': 'scattered-clouds.png',
    '04d': 'broken-clouds.png',
    '09d': 'shower-rain.png',
    '10d': 'rain.png',
    '11d': 'thunderstorm.png',
    '13d': 'snow.png',
    '50d': 'mist.png',
    '01n': 'clear-sky-night.png',
    '02n': 'few-clouds-night.png',
    '03n': 'scattered-clouds-night.png',
    '04n': 'broken-clouds-night.png',
    '09n': 'shower-rain-night.png',
    '10n': 'rain-night.png',
    '11n': 'thunderstorm-night.png',
    '13n': 'snow-night.png',
    '50n': 'mist-night.png',
  };

  constructor(private weatherService: WeatherApiService) {
    this.setGreetings();
  }

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }

  setGreetings() {
    const horaAtual = new Date().getHours();

    if (horaAtual >= 0 && horaAtual < 12) {
      this.greetings = 'Bom Dia';
    } else if (horaAtual >= 12 && horaAtual < 18) {
      this.greetings = 'Boa Tarde';
    } else {
      this.greetings = 'Boa Noite';
    }
  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe(
      (res: any) => {
        console.log(res);

        // Mapeie os dados da API para o objeto 'weather' de forma adequada
        const kelvinTemp = res.main.temp;
        const celsiusTemp = kelvinTemp - 274.15;

        const kelvinTempMin = res.main.temp_min;
        const celsiusTempMin = kelvinTempMin - 277.15;

        const kelvinTempMax = res.main.temp_max;
        const celsiusTempMax = kelvinTempMax - 273.15;

        const KelvinFeelsLike = res.main.feels_like;
        const CelsiusTempFellsLike = KelvinFeelsLike - 272.15;

        // Mapeie outros dados da API conforme necessário
        const iconCode = res.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        this.weather = {
          ...res,
          main: {
            ...res.main,
            temp: celsiusTemp,
            temp_min: celsiusTempMin,
            temp_max: celsiusTempMax,
            feels_like: CelsiusTempFellsLike,
          },
          weather: {
            ...res.weather[0],
            iconUrl: iconUrl,
          },
        };
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
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
