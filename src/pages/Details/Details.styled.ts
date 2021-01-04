import { reduce } from 'lodash-es'
import styled from 'styled-components'

import { ReactComponent as SunnySvg } from '@/assets/svg/sunny.svg'
import { ReactComponent as CloudsSvg } from '@/assets/svg/clouds.svg'
import { ReactComponent as RainSvg } from '@/assets/svg/rain.svg'
import { ReactComponent as FogSvg } from '@/assets/svg/fog.svg'
import { ReactComponent as StormSvg } from '@/assets/svg/storm.svg'

export const Container = styled.div.attrs({
  className: 'page-bg'
})``

export const Card = styled.div.attrs(() => ({
  className: 'page-content'
}))`
  display: grid;
  align-items: start;
  background: #fff;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #fff;
  background: linear-gradient(to bottom, #6b5b95, #f7cac9);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const Summary = styled.div`
  display: grid;
  grid-gap: 2rem;
`

export const TemperatureContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

export const TemperatureCelsius = styled.span`
  font-size: 4rem;
`

export const TemperatureState = styled.span`
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`

export const HumidityWind = styled.div`
  display: flex;
`

export const HumidityContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  padding: 0 2rem;
  text-transform: uppercase;
`
export const HumidityText = styled.span`
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
`

export const HumidityValue = styled.span`
  font-weight: 600;
`

export const WindContainer = styled(HumidityContainer)`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 2px;
    height: 90%;
    background-color: #fff;
  }
`
export const WindText = styled(HumidityText)``
export const WindValue = styled(HumidityValue)``

export const City = styled.h3.attrs(() => ({
  className: 'heading-primary'
}))`
  color: #fff;
  font-size: 2.5rem;

  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 4px;
    border-radius: 100px;
    margin-top: 1rem;
    background: #fff;
  }
`

export const ForecastContainer = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2.5rem;
  justify-content: space-evenly;
  align-content: center;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const DayWeather = styled.li`
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
`

export const DayOfWeek = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #39437a;
`

interface WeatherIcon {
  [key: string]: React.FunctionComponent
}

export const Icon: WeatherIcon = reduce(
  {
    Sunny: SunnySvg,
    Clouds: CloudsSvg,
    Rain: RainSvg,
    Fog: FogSvg,
    Storm: StormSvg
  },
  (icons: WeatherIcon, Svg: React.FunctionComponent, name: string) => {
    icons[name] = styled(Svg)`
      width: 4rem;
    `

    return icons
  },
  {}
)

export const DayTemperatureCelsius = styled.span`
  font-size: 1.85rem;
  letter-spacing: 0.25rem;
  color: #0c1066;
`

export const DayTemperatureState = styled.span`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #2b244d;
`
