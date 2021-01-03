import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'page-bg'
})``

export const Card = styled.div.attrs(() => ({
  className: 'page-content'
}))`
  display: grid;
  align-content: start;
  justify-items: center;
  padding: 1rem;
  text-align: center;
  background: #fff;
`

export const Heading = styled.h3.attrs(() => ({
  className: 'heading-secondary'
}))`
  font-size: 1.75rem;
`

export const Search = styled.div`
  justify-self: stretch;
`