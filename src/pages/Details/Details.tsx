import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { get, minBy, maxBy } from 'lodash-es'

import { getWeather, getForecast } from '@/services/weather'
import { toVietnameseDateString, getShortDayOfWeek } from '@/shared/utils/date'

import * as UI from './Details.styled'

function Details() {
  const params = useParams<RouteParams>()

  const [weatherData, setWeatherData] = useState<any>({})
  const [weatherOfDays, setWeatherOfDays] = useState<any[]>([])

  useEffect(() => {
    getWeather(params.city).then(data => {
      setWeatherData({
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed
      })
    })

    getForecast(params.city).then(({ list }) => {
      const itemsInDayMap = new Map()
      const today = toVietnameseDateString(new Date())

      list.forEach(item => {
        const day = toVietnameseDateString(item.dt_txt)
        if (today === day) return

        const items = itemsInDayMap.get(day) || []
        itemsInDayMap.set(day, items.concat(item))
      })

      const days: any[] = []
      itemsInDayMap.forEach((items, day) => {
        days.push({
          day,
          dayOfWeek: getShortDayOfWeek(new Date(items[0].dt_txt).getDay()),
          temp: Math.round(items[0].main.temp),
          state: items[0].weather[0].main
        })
      })

      const sortedDays = days.sort((a, b) => a.day - b.day)
      setWeatherOfDays(sortedDays)
    })
  }, [params.city])

  const renderDayWeatherIcon = useCallback((state) => {
    switch (state) {
      case 'Sunny':
      case 'Clear':
        return <UI.Icon.Sunny />

      case 'Clouds':
        return <UI.Icon.Clouds />

      case 'Rain':
      case 'Drizzle':
      case 'Mist':
        return <UI.Icon.Rain />

      case 'Haze':
      case 'Fog':
        return <UI.Icon.Fog />

      case 'Storm':
      case 'Thunderstorm':
        return <UI.Icon.Storm />

      default:
        return null
    }
  }, [])

  return (
    <UI.Container>
      <UI.Card>
        <UI.Header>
          <UI.Summary>
            <UI.TemperatureContainer>
              <UI.TemperatureCelsius>
                {weatherData.temp}&#176;
              </UI.TemperatureCelsius>
              <UI.TemperatureState>
                {weatherData.description}
              </UI.TemperatureState>
            </UI.TemperatureContainer>
            <UI.HumidityWind>
              <UI.HumidityContainer>
                <UI.HumidityText>Humidity</UI.HumidityText>
                <UI.HumidityValue>{weatherData.humidity}%</UI.HumidityValue>
              </UI.HumidityContainer>
              <UI.WindContainer>
                <UI.WindText>Wind</UI.WindText>
                <UI.WindValue>{weatherData.wind}K/M</UI.WindValue>
              </UI.WindContainer>
            </UI.HumidityWind>
          </UI.Summary>
          <UI.City>Hanoi</UI.City>
        </UI.Header>

        <UI.ForecastContainer>
          {weatherOfDays.map(weather => (
            <UI.DayWeather key={weather.day}>
              <UI.DayOfWeek>{weather.dayOfWeek}</UI.DayOfWeek>
              {renderDayWeatherIcon(weather.state)}
              <UI.DayTemperatureCelsius>{weather.temp}&#176;</UI.DayTemperatureCelsius>
              <UI.DayTemperatureState>{weather.state}</UI.DayTemperatureState>
            </UI.DayWeather>
          ))}
        </UI.ForecastContainer>
      </UI.Card>
    </UI.Container>
  )
}

interface RouteParams {
  city: string
}

export default Details
