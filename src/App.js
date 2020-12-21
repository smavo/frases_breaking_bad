import React, { useState,useEffect } from 'react';
import Header from './Components/Header';
import Frase from './Components/Frase';
import styled from '@emotion/styled';


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;
` ;

const Boton = styled.button`
  /*background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);*/
  background-color: #252a34;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 25px;
  /*border: 2px solid black;*/
  transition: background-size .8s ease;
  border-radius: 10px;
  outline:none;

  :hover {
    cursor:pointer;
    background-size: 300px;
    background-color: #112d4e;
  }
`;

function App() {

  const API_URL = process.env.REACT_APP_API_URL;
  //console.log(API_URL);

  // state de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(`${API_URL}`);
    const frase = await api.json()
    guardarFrase(frase[0]);
    console.log(frase[0])
  }

    // Cargar una frase
    useEffect( () => {
      consultarAPI()
    }, []);

  return (

    <Contenedor>
      <Header titulo={"Frases de Breaking Bad"} />

      <Frase frase={frase} />

      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>

  );
}

export default App;
