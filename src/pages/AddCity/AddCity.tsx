import { useState } from 'react'
import { debounce } from 'lodash-es'

import { getCities } from '@/services/weather'
import Autocomplete, { Item } from '@/components/Autocomplete'
import WeatherCard from '@/components/WeatherCard'

import * as UI from './AddCity.styled'

const itemToString = (item: Item) => (item ? item.text : '')

function AddCity() {
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')

  const handleAutocompleteSelect = (selection: any) => {
    setSelectedCity(selection.name)
  }

  const handleAutocompleteInputChange = debounce(async (value: string) => {
    const res = await getCities(value)

    const cities = res.data.map((item: any) => ({
      ...item,
      value: item.id,
      text: item.name
    }))

    setCities(cities)
  }, 300)

  return (
    <UI.Container>
      <UI.Card>
        <UI.Heading>Search Cities</UI.Heading>
        <Autocomplete
          items={cities}
          itemToString={itemToString}
          onInputValueChange={handleAutocompleteInputChange}
          onSelect={handleAutocompleteSelect}
        />
        {selectedCity && (
          <WeatherCard addMode city={selectedCity} />
        )}
      </UI.Card>
    </UI.Container>
  )
}

export default AddCity
