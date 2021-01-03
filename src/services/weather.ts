import api from './api'

const appId = process.env.REACT_APP_OPEN_WEATHER_APP_ID

export interface CityWeatherData {
  main: {
    temp: number
    temp_max: number
    temp_min: number
  }
  weather: {
    description: string
    main: string
  }[]
}

export interface CityForecastData {
  list: {
    dt_txt: string
    main: {
      temp: number
      temp_max: number
      temp_min: number
    }
  }[]
}

export function getWeather(
  city: string,
  metric: 'metric' | 'imperial' = 'metric'
): Promise<CityWeatherData> {
  return api.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=${appId}`
  )
}

export function getForecast(
  city: string,
  metric: 'metric' | 'imperial' = 'metric'
): Promise<CityForecastData> {
  return api.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=${appId}`
  )
}

export function getCities(city: string) {
  return api.get(
    `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${city}`
  )
}
