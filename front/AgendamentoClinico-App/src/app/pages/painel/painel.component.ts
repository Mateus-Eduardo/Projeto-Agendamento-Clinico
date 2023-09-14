import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})

export class PainelComponent implements OnInit {

  apiKey = "";
  apiCountryURL = "https://countryflagsapi.com/png/";
  apiUnsplash = "https://source.unsplash.com/1600x900/?";
  cityInput: HTMLInputElement | undefined;
  city: string = "";
  temperature: string = "";
  description: string = "";
  weatherIcon: string = "";
  country: string = "";
  humidity: string = "";
  wind: string = "";
  errorMessageContainer: HTMLElement | null = null;
  loader: HTMLElement | null = null;
  suggestionButtons: NodeListOf<Element> | null = null;
  weatherContainer: HTMLElement | null = null;
  suggestionContainer: HTMLElement | null = null;

  ngOnInit() {
    // Inicialize os elementos do DOM aqui
    this.cityInput = document.querySelector("#city-input") as HTMLInputElement;
    this.errorMessageContainer = document.querySelector("#error-message");
    this.loader = document.querySelector("#loader");
    this.suggestionButtons = document.querySelectorAll("#suggestions button");
    this.weatherContainer = document.querySelector("#weather-data");
    this.suggestionContainer = document.querySelector("#suggestions");

    // Adicione os event listeners aqui
    this.suggestionButtons?.forEach((btn) => {
      btn.addEventListener("click", () => {
        const city: string = btn.getAttribute("id")!;
        this.showWeatherData(city);
      });
    });
  }

  toggleLoader() {
    if (this.loader) {
      this.loader.classList.toggle("hide");
    }
  }

  async getWeatherData(city: string) {
    this.toggleLoader();

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    this.toggleLoader();

    return data;
  }

  showErrorMessage() {
    if (this.errorMessageContainer) {
      this.errorMessageContainer.classList.remove("hide");
    }
  }

  hideInformation() {
    if (this.errorMessageContainer && this.weatherContainer && this.suggestionContainer) {
      this.errorMessageContainer.classList.add("hide");
      this.weatherContainer.classList.add("hide");
      this.suggestionContainer.classList.add("hide");
    }
  }

  async showWeatherData(city: string) {
    this.hideInformation();

    if (!city) {
      return; // Não faça nada se city for nulo
    }

    const data = await this.getWeatherData(city);

    if (data.cod === "404") {
      this.showErrorMessage();
      return;
    }

    this.city = data.name;
    this.temperature = parseInt(data.main.temp).toString();
    this.description = data.weather[0].description;
    this.weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    this.country = this.apiCountryURL + data.sys.country;
    this.humidity = `${data.main.humidity}%`;
    this.wind = `${data.wind.speed}km/h`;

    // Altere a imagem de fundo
    document.body.style.backgroundImage = `url("${this.apiUnsplash + city}")`;

    if (this.weatherContainer) {
      this.weatherContainer.classList.remove("hide");
    }
  }

  search() {
    if (this.cityInput && this.cityInput.value) { // Verifique se cityInput e seu valor existem
      const city = this.cityInput.value;
      this.showWeatherData(city);
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === "Enter" && this.cityInput && this.cityInput.value) { // Verifique se cityInput e seu valor existem
      const city = this.cityInput.value;
      this.showWeatherData(city);
    }
  }
}
