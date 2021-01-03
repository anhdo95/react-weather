import * as UI from './Details.styled'

function Details() {
  return (
    <UI.Container>
      <UI.Card>
        <UI.Header>
          <UI.Summary>
            <UI.TemperatureContainer>
              <UI.TemperatureCelsius>32&#176;</UI.TemperatureCelsius>
              <UI.TemperatureState>Clear</UI.TemperatureState>
            </UI.TemperatureContainer>
            <UI.HumidityWind>
              <UI.HumidityContainer>
                <UI.HumidityText>Humidity</UI.HumidityText>
                <UI.HumidityValue>62%</UI.HumidityValue>
              </UI.HumidityContainer>
              <UI.WindContainer>
                <UI.WindText>Wind</UI.WindText>
                <UI.WindValue>6K/M</UI.WindValue>
              </UI.WindContainer>
            </UI.HumidityWind>
          </UI.Summary>
          <UI.City>Hanoi</UI.City>
        </UI.Header>
      </UI.Card>
    </UI.Container>
  )
}

export default Details
