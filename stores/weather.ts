import { defineStore } from 'pinia';

interface WeatherData {
	properties: {
		textDescription: string;
		temperature: {
			value: number | null;
		};
	}
}

interface ForecastData {
	properties: {
		maxTemperature: {
			values: [
				{
					value: number | null
				}
			]
		},
		minTemperature: {
			values: [
				{
					value: number | null
				}
			]
		}
	}
}

export const useWeatherStore = defineStore('weather', {
	// convert to a function
	state: () => ({
		description: '' as string,
		temperatureC: null as number | null,
		highC: null as number | null,
		lowC: null as number | null,
		temperature: null as number | null,
		high: null as number | null,
		low: null as number | null
	}),
	getters: {
		fahrenheit(state) {
			if (state.temperatureC === null) return;
			this.temperature = state.temperatureC * 9 / 5 + 32;
			if (state.highC === null) return;
			this.high = state.highC * 9 / 5 + 32;
			if (state.lowC === null) return;
			this.low = state.lowC * 9 / 5 + 32;
		},
		integer(): number | undefined {
			if (this.temperature == undefined) return;
			this.temperature = Math.round(this.temperature);
		}
	},
	actions: {
		async getWeather() {
			try {
				let weather: WeatherData = await $fetch<WeatherData>(
					'/api/weather/current'
				);

				this.updateWeather(weather)
			} catch (err) {
					console.log("Weather: ", err)
			}
		},
		async getForecast() {
			try {
				let forecast: ForecastData = await $fetch<ForecastData>(
					'/api/weather/forecast'
				);

				this.updateForecast(forecast)
			} catch (err) {
				console.log("Forecast: ", err);
			}
		},
		updateWeather(data: WeatherData) {
      this.description = data.properties.textDescription;

			if (data.properties.temperature.value != null) {
				this.temperatureC = data.properties.temperature.value;
			} else if (data.properties.temperature.value === null && this.temperatureC !== null) {
				return;
			} else {
				this.temperatureC = -160/9; // 0ºF
			}
    },
		updateForecast(data: ForecastData) {
			// Check if the maxTemperature and minTemperature arrays are not null and have at least one element
			const maxTempValue = data.properties.maxTemperature.values[0]?.value;
			const minTempValue = data.properties.minTemperature.values[0]?.value;
	
			// Use optional chaining to safely access the value property
			if (maxTempValue !== null && minTempValue !== null) {
					// Assign the values to high and low only if they are not null
					this.highC = maxTempValue;
					this.lowC = minTempValue;
			}
		}	
	}
});