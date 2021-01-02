import WeatherCard from '@/components/WeatherCard'
import AddCard from '@/components/AddCard'

import * as UI from './Home.styled';

function Home() {
  return (
    <UI.Container>
      <WeatherCard city="Hanoi" />
      <AddCard />
    </UI.Container>
  )
}

export default Home
