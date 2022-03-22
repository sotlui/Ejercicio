import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonCrear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {

  const [input, setInput] = useState('');

  const handleInput = val =>{
    setInput( input + val );
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src = {freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculador'>
        <Pantalla input = { input }/>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonCrear>Clear</BotonCrear>
        </div>
      </div>
      
    </div>
  );
}

export default App;
