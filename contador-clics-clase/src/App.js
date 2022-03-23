import React from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      numClics:0
    };
    this.handleClic = this.handleClic.bind(this)
  }

  handleClic(){
    this.setState(({numClics}) => ({numClics: numClics + 1 }))
  }

  handleReset(){
    this.setState({numClics:0});
  }

  render(){
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
         numClics={ this.state.numClics } />
        <Boton 
          texto='Clic'
          esBotonClic = { true } 
          manejarClic = { this.handleClic }/>

        <Boton 
          texto='Reiniciar'
          esBotonClic = {false}
          manejarClic = { this.handleReset } />
      </div>
     
    </div>
  );
}
}


  

export default App;
