import { BrowserRouter, Route, Routes } from 'react-router-dom';
import rutas from './route-config';
import './App.css';
import Menu from './menu/Menu';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='barMenu'>
        <Menu />
      </div>
      <div className='content'>
        <Routes>
          {rutas.map((ruta)=>(
            <Route key={ruta.path} path={ruta.path} element={ruta.component}>
            </Route>
          ))}
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
