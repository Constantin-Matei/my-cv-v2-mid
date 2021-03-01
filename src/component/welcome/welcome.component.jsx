import React, { useEffect, useState } from 'react'
import { Header } from '../header'
import * as WS from './welcome.style'

export const Welcome = () => {
  const [ data, salveazaData ] = useState({})
  useEffect(() => {
    // vreau sa iau datele de pe server in frontend
    fetch('http://localhost:3800/welcome')
      .then(response=> response.json())
      .then(response=>{
        // console.log(response)
        salveazaData(response)
      })
  }, [])
  console.log(data)
  const { title, name, jobName, descriptionTitle } = data
  return (
    <WS.Wrapper>
      <Header title={title}/>
      <WS.Name>{name}</WS.Name>
      <WS.JobName>{jobName}</WS.JobName>
      <WS.DescriptionTitle>{descriptionTitle}</WS.DescriptionTitle>
    </WS.Wrapper>
  )
}
