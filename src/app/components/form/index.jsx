//import tools
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios"


//Style
const InfoContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;
const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;
const FormContainer = styled.div`
${tw`
  flex
  flex-col
  items-center

  
`}
`
const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  box-shadow :5px 5px 5px 4px rgba(0, 0, 0, 0.2) ;
  
${tw`
  border-b-black
  rounded-3xl
 
`}
`

export function Form() {
  const [data, setData] = useState([])






  useEffect(() => {
    const apiUrl = "http://localhost:4000/user"
    axios.get(apiUrl).then(res => {
      const all = res.data;
      setData(all)
    })


  }, [setData])
  return (
    <InfoContainer>
      <FormContainer>
        {console.log(data)}
        {data.map(e =>

          <p>{e.mail}</p>

        )}
        <FormInput defaultValue={"Nom"} />
        <FormInput defaultValue={"Prénom"} />
        <FormInput defaultValue={"Mail"} />
      </FormContainer>
      <Title>TATA</Title>
    </InfoContainer>
  )
};