import React from 'react'
import { Header } from '../header'
import * as WS from './welcome.style'

export const Welcome = ({name, jobName}) => {
  return (
    <WS.Wrapper>
      <Header title='Welcome to My CV'/>
      <WS.Name>Constantin Matei</WS.Name>
      <WS.JobName>Early Javascript Junior</WS.JobName>
      <WS.DescriptionTitle>About me</WS.DescriptionTitle>
    </WS.Wrapper>
  )
}
