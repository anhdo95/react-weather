import { useState, useEffect, useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { get, minBy, maxBy } from 'lodash-es'

import { selectCurrentUser } from '@/store/user'
import { selectUserCities } from '@/store/weather'
import { getWeather, getForecast } from '@/services/weather'
import { addCity } from '@/services/firebase'
import { toVietnameseDateString } from '@/shared/utils/date'

import * as UI from './WeatherCard.styled'

function WeatherCard(props: Props) {
  const currentUser = useSelector(selectCurrentUser)
  const useCities = useSelector(selectUserCities)
  const history = useHistory()

  const [state, setState] = useState<any>()
  const [weatherData, setWeatherData] = useState<any>({})
  const [forecastData, setForecastData] = useState<any>({})

  const maxTemperature = useMemo(
    () => Math.max(forecastData.maxTemp, weatherData.temp),
    [forecastData.maxTemp, weatherData.temp]
  )

  const minTemperature = useMemo(
    () => Math.min(forecastData.minTemp, weatherData.temp),
    [forecastData.minTemp, weatherData.temp]
  )

  const cityAdded = useMemo(() => useCities.includes(props.city), [
    useCities,
    props.city
  ])

  useEffect(() => {
    getWeather(props.city).then(data => {
      setState(data.weather[0].main)

      setWeatherData({
        temp: Math.round(data.main.temp),
        description: data.weather[0].description
      })
    })

    getForecast(props.city).then(({ list }) => {
      const currentDate = toVietnameseDateString()
      const todayTemperatures = list.filter(
        item => currentDate === toVietnameseDateString(item.dt_txt)
      )

      const minTemp = Math.round(
        get(minBy(todayTemperatures, 'main.temp'), 'main.temp')
      )
      const maxTemp = Math.round(
        get(maxBy(todayTemperatures, 'main.temp'), 'main.temp')
      )

      setForecastData({
        minTemp,
        maxTemp
      })
    })
  }, [props.city])

  const handleAddCity = useCallback(() => {
    const params = {
      userId: currentUser.uid,
      city: props.city
    }

    addCity(params)
      .then(() => {
        history.push('/')
      })
      .catch(console.error)
  }, [currentUser, props.city, history])

  const renderWeatherState = useCallback(() => {
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
  }, [state])

  return (
    <UI.Container to={`/details/${props.city}`}>
      <UI.CityName>{props.city}</UI.CityName>
      {renderWeatherState()}
      <UI.TemperatureContainer>
        <UI.TemperatureCelsius>{weatherData.temp}&#176;</UI.TemperatureCelsius>
        <UI.TemperatureText>{weatherData.description}</UI.TemperatureText>
      </UI.TemperatureContainer>
      <UI.TemperatureMinMax>
        <UI.TemperatureMin>
          <UI.TemperatureMinIcon />
          <UI.TemperatureMinCelsius>{minTemperature}</UI.TemperatureMinCelsius>
          <UI.TemperatureMinText>Min</UI.TemperatureMinText>
        </UI.TemperatureMin>
        <UI.TemperatureMax>
          <UI.TemperatureMaxIcon />
          <UI.TemperatureMaxCelsius>{maxTemperature}</UI.TemperatureMaxCelsius>
          <UI.TemperatureMaxText>Max</UI.TemperatureMaxText>
        </UI.TemperatureMax>
      </UI.TemperatureMinMax>
      {props.addMode && (
        <UI.AddButton disabled={cityAdded} onClick={handleAddCity}>
          Add
        </UI.AddButton>
      )}
    </UI.Container>
  )
}

interface Props {
  addMode?: boolean
  city: string
}

export default WeatherCard
