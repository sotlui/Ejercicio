import './App.css';
import Login from './containers/login/Login';
import Menu from './menu/Menu';

function App() {
  return (
    <div className="App">
      <div className=''>
        <Menu />
      </div>
        
        <Login />
      
    </div>
  );
}

export default App;
