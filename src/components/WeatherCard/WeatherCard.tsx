import * as UI from './WeatherCard.styled'

function WeatherCard(props: Props) {
  return (
    <UI.Container>
      <UI.CityName>Ha noi</UI.CityName>
      <UI.Icon.Clouds />
      <UI.TemperatureContainer>
        <UI.TemperatureCelsius>28&#176;</UI.TemperatureCelsius>
        <UI.TemperatureText>Clear</UI.TemperatureText>
      </UI.TemperatureContainer>
      <UI.TemperatureMinMax>
        <UI.TemperatureMin>
          <UI.TemperatureMinIcon />
          <UI.TemperatureMinCelsius>22</UI.TemperatureMinCelsius>
          <UI.TemperatureMinText>Min</UI.TemperatureMinText>
        </UI.TemperatureMin>
        <UI.TemperatureMax>
          <UI.TemperatureMaxIcon />
          <UI.TemperatureMaxCelsius>29</UI.TemperatureMaxCelsius>
          <UI.TemperatureMaxText>Max</UI.TemperatureMaxText>
        </UI.TemperatureMax>
      </UI.TemperatureMinMax>
    </UI.Container>
  )
}

interface Props {}

export default WeatherCard
