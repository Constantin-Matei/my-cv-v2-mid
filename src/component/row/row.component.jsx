import React, { children } from 'react'
import { StyledRow } from './row.styled'

export const Row = ({children}) => {
  return (
    <StyledRow>{children}</StyledRow>
  )
}
