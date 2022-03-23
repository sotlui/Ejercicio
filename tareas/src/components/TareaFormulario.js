import { useState } from 'react'
import '../stylesheet/TareaFormulario.css'
import {v4 as uuidv4}  from 'uuid';

const TareaFormulario = (props) =>{

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  };

  const manejarEnvio = e =>{
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false
    }
    props.onSubmit(tareaNueva);
  };

  

  return(
    <form onSubmit={manejarEnvio} className='tarea-formulario'>
      <input className='tarea-input' 
      type='text'
      placeholder='Escribe una Tarea'
      name='texto' 
      onChange={manejarCambio}/>
      <button className='tarea-boton'>
        Agragar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario;