/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import ListaTarea from './components/ListaTarea';
import freeCodeCampLogo  from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className="aplicacion-tarea">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo} />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTarea />
      </div>
    </div>
  );
}

export default App;
