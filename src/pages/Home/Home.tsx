import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectUserCities, fetchUserCities } from '@/store/weather'
import WeatherCard from '@/components/WeatherCard'
import AddCard from '@/components/AddCard'

import * as UI from './Home.styled'

function Home() {
  const cities = useSelector(selectUserCities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserCities())
  }, [dispatch])

  const renderWeatherCards = useCallback(() => {
    return cities.map(city => <WeatherCard key={city} city={city} />)
  }, [cities])

  return (
    <UI.Container>
      <AddCard />
      {renderWeatherCards()}
    </UI.Container>
  )
}

export default Home
