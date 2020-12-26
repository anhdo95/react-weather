import styled from 'styled-components'

const ModeToggleButton = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
`

const ModeToggleCheckbox = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  appearance: none;
  webkit-appearance: none;
`

const ModeToggleBackground = styled.span`
  height: 1rem;
  width: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModeToggleCircle = styled.span`
  height: 1.3rem;
  width: 1.3rem;
  background-color: #2b244d;
  position: absolute;
  top: -0.18rem;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);
  -webkit-transition: left 0.3s linear;
  transition: left 0.3s linear;
  left: 0.2rem;
`

function ToggleButton() {
  return (
    <ModeToggleButton>
      <ModeToggleCheckbox />
      <ModeToggleBackground />
      <ModeToggleCircle />
    </ModeToggleButton>
  )
}

export default ToggleButton
