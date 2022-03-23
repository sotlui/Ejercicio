import { useState } from 'react';
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../stylesheet/ListaTarea.css'


const ListaTarea = () =>{

  const  [tareas, setTareas] = useState([]);

  const agregarTarea =  tarea =>{
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas=[tarea,...tareas];
      setTareas(tareasActualizadas);
    }
  };

    return(
      <>
        <TareaFormulario onSubmit={ agregarTarea }/>
        <div className='tarea-lista-contenedor'>
          {
            tareas.map((tarea) =>
              <Tarea 
                texto={tarea.texto} 
                completada={tarea.completada}
              />
            )
          }
        </div>
      </>
    )
}

export default ListaTarea;