import React from 'react'

import * as UI from './AddCard.styled'

function AddCard() {
  return (
    <UI.Container to="/add">
      <UI.Heading>Add City</UI.Heading>
      <UI.PlusIcon />
    </UI.Container>
  )
}

export default AddCard
