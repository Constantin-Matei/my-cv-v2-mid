import React, { useEffect, useState } from 'react'
import { Header } from '../header'
import * as WS from './welcome.style'
import { Grid } from '@material-ui/core'
import { StyledRow } from '../row/row.styled';

export const Welcome = () => {
  const [ data, salveazaData ] = useState({description: [], button:{}})
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
  const { title, name, jobName, descriptionTitle, description, button } = data
  return (
    <>
      <StyledRow>
        <Header title={title}/>
      </StyledRow>
      <StyledRow>
        {/* <IconYoutube img={     siglaYoutube     }/> */}
      </StyledRow>
      <StyledRow>
        <WS.Name>{name}</WS.Name>
        </StyledRow>
      <StyledRow>
        <WS.JobName>{jobName}</WS.JobName>
      </StyledRow>
      <StyledRow>
        <WS.DescriptionTitle>{descriptionTitle}</WS.DescriptionTitle>
      </StyledRow>
      <StyledRow>
        <WS.Description>{description.map(item => <p>{item}</p>)}</WS.Description>
      </StyledRow>
      <StyledRow jc="center">
        <WS.Button>{button.label}</WS.Button>
      </StyledRow>
    </>
  );
};
