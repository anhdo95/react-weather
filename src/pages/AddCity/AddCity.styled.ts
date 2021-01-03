import styled from 'styled-components'
import Downshift from 'downshift'

export const Container = styled.div.attrs({
  className: 'page-bg'
})``

export const Card = styled.div.attrs(() => ({
  className: 'page-content'
}))`
  display: grid;
  align-content: start;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  background: #fff;
`

export const Heading = styled.h3.attrs(() => ({
  className: 'heading-secondary'
}))`
  font-size: 1.75rem;
`

export const Autocomplete = styled(Downshift)``

export const AutocompleteBody = styled.div`
  margin-top: 1rem;
  position: relative;
`

export const AutocompleteInput = styled.input<{ isOpen: boolean }>`
  display: inline-block;
  width: 100%;
  height: 2em;
  max-width: 320px;
  padding: 1.25rem;
  outline: 0;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: ${props => props.isOpen ? '0.3rem 0.3rem 0 0' : '0.3rem'};
  transition: border-color 0.1s ease, width 0.1s ease;

  &:hover,
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }
`

export const AutocompleteItems = styled.ul`
  position: absolute;
  left: 50%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 320px;
  max-height: 20rem;
  background-color: white;
  border: 1px solid var(--color-primary);
  border-top: 0;
  border-radius: 0 0 0.3rem 0.3rem;
  box-shadow: 2px 10px 5px 1px rgba(34, 36, 38, 0.15);
  transform: translateX(-50%);
`

export const AutocompleteItem = styled.li`
  display: block;
  padding: 1rem 1.25rem;
  text-align: left;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-primary);
  }
`
