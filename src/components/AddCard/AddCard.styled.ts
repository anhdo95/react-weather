import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as CirclePlusSvg } from '@/assets/svg/circle-plus.svg'

export const Container = styled(Link)`
  display: grid;
  place-content: center;
  width: 19rem;
  height: 30rem;
  margin: 2rem;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  background-color: #fff;
  border-radius: 1.75rem;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  cursor: pointer;
`

export const Heading = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

export const PlusIcon = styled(CirclePlusSvg)`
  width: 9rem;
`
