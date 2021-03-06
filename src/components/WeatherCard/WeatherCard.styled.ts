import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { reduce } from 'lodash-es'

import { ReactComponent as SunnySvg } from '@/assets/svg/sunny.svg'
import { ReactComponent as CloudsSvg } from '@/assets/svg/clouds.svg'
import { ReactComponent as RainSvg } from '@/assets/svg/rain.svg'
import { ReactComponent as FogSvg } from '@/assets/svg/fog.svg'
import { ReactComponent as StormSvg } from '@/assets/svg/storm.svg'
import { ReactComponent as DownArrowSvg } from '@/assets/svg/down-arrow.svg'
import { ReactComponent as UpArrowSvg } from '@/assets/svg/up-arrow.svg'

export const Container = styled(Link)`
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  width: 19rem;
  min-height: 25rem;
  margin: 2rem;
  padding: 2rem;
  text-decoration: none;
  background-color: #fff;
  border-radius: 1.75rem;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  cursor: pointer;
`

export const CityName = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
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
      width: 9rem;
    `

    return icons
  },
  {}
)

export const TemperatureContainer = styled.div`
  display: grid;
  text-align: center;
`

export const TemperatureCelsius = styled.span`
  font-size: 3rem;
`

export const TemperatureText = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
`

export const TemperatureMinMax = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
`

export const TemperatureMin = styled.div`
  display: grid;
  grid-template-rows: 30px auto auto;
  justify-items: center;
`
export const TemperatureMax = styled(TemperatureMin)``

export const TemperatureMinIcon = styled(DownArrowSvg)`
  width: 20px;
  height: 20px;
`
export const TemperatureMaxIcon = styled(UpArrowSvg)`
  height: 20px;
  width: 20px;
  margin-top: 10px;
`

export const TemperatureMinCelsius = styled.span`
  font-size: 1.25rem;
`

export const TemperatureMaxCelsius = styled(TemperatureMinCelsius)``

export const TemperatureMinText = styled.span``

export const TemperatureMaxText = styled.span``

export const AddButton = styled.button.attrs(() => ({
  className: 'form-button form-button--primary'
}))`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`
