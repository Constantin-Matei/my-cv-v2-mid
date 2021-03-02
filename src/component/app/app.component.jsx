import React from 'react'
import { Welcome } from '../welcome'
import { Header } from '../header'
import { LeftMenu } from '../left-menu'
import { GridLayout } from './app.style'

export const App = () => {
  return (
    <GridLayout>
      <Welcome />
    </GridLayout>
  )
}


