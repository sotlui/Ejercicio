import './App.css';
import Login from './containers/login/Login';
import Recordar from './containers/login/Recordar';
import Register from './containers/login/Register';
import Menu from './menu/Menu';

function App() {
  return (
    <div className="App">
      <div className='barMenu'>
        <Menu />
      </div>
      <div className='content'>
        <Login />
      </div>
    </div>
  );
}

export default App;
