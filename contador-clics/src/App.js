import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png'

function App() {

  const [numClics, setNumClics]=useState(10001);
  
  const handleClic = () =>{
    setNumClics( numClics + 1 );
  };

  const handleReset = () =>{
    setNumClics(0);
  };
  
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
         numClics={ numClics } />
        <Boton 
          texto='Clic'
          esBotonClic = { true } 
          manejarClic = { handleClic }/>

        <Boton 
          texto='Reiniciar'
          esBotonClic = {false}
          manejarClic = { handleReset } />
      </div>
     
    </div>
  );
}

export default App;
