import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  apiKey = '3d62d08596112700906895c4fe29aeda'
  URI: string = '';

  constructor(private http: HttpClient) {

    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
  }

  getWeather(cityName: string){
    return this.http.get(`${this.URI}${cityName}`);

  }


}
