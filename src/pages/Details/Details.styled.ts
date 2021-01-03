import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'page-bg'
})``

export const Card = styled.div.attrs(() => ({
  className: 'page-content'
}))`
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
