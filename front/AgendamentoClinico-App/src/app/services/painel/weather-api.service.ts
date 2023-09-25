import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  URI: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string) {
    const apiKey = '3d62d08596112700906895c4fe29aeda';
    const params = { q: cityName, appid: apiKey };
    return this.http.get(this.URI, { params });
  }


}
