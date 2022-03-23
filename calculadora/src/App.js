/* eslint-disable no-undef */
import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'
import Boton from './components/Boton'
import BotonCrear from './components/BotonClear'
import Imagen from './components/Imagen'
import Pantalla from './components/Pantalla'
import freeCodeCampLogo from './img/freecodecamp-logo.png'

function App () {
  const [input, setInput] = useState('')

  const handleInput = val => {
    setInput(input + val)
  }

  const handleClear = () => {
    setInput('')
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input).toFixed(4))
    } else {
      alert('Favor ingresar valores.')
    }
  }

  return (
    <div className='App'>
      <Imagen freeCodeCampLogo={freeCodeCampLogo} />
      <div className='contenedor-calculador'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton onClic={handleInput}>1</Boton>
          <Boton onClic={handleInput}>2</Boton>
          <Boton onClic={handleInput}>3</Boton>
          <Boton onClic={handleInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton onClic={handleInput}>4</Boton>
          <Boton onClic={handleInput}>5</Boton>
          <Boton onClic={handleInput}>6</Boton>
          <Boton onClic={handleInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton onClic={handleInput}>7</Boton>
          <Boton onClic={handleInput}>8</Boton>
          <Boton onClic={handleInput}>9</Boton>
          <Boton onClic={handleInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton onClic={calcularResultado}>=</Boton>
          <Boton onClic={handleInput}>0</Boton>
          <Boton nClic={handleInput}>.</Boton>
          <Boton onClic={handleInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonCrear onClic={handleClear}>Clear</BotonCrear>
        </div>
      </div>

    </div>
  )
}

export default App
