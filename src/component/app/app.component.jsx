import React from 'react'
import { Footer } from '../footer'
import { Header } from '../header'
import { LeftMenu } from '../left-menu'
import { Title, Wrapper } from './app.style'

export const App = () => {
  return (
    <Wrapper>
      <Title>Ma mut in Canary Wharf.</Title>
      <Header />
      <LeftMenu />
      <Footer />
    </Wrapper>
  )
}


