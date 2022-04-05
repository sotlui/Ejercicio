import FormGroupText from '../../components/FormGroupText';
import FormGroupButton from '../../components/FormGroupButton';
import '../../stylesheet/Login.css'
import { Link } from 'react-router-dom';

const Login = () =>{

  const handleUser = ()=>{

  }
    return(
        <div className='contenedor-login'>
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleUser}>
            <FormGroupText
              label='Usuario'
              name='usuario'
              type='email'
              placeholder='micuenta@retension.com'   
            />
            <FormGroupText
              label='Password'
              name='password'
              type='password'
              placeholder='*******'   
            />
            <FormGroupButton
              type='submit'
              className='btnBoton'
              onClick=''>
                Iniciar Sesión
            </FormGroupButton>

            <FormGroupButton
              type='button'
              className='btnBoton'
              onClick=''>
                Registrar
            </FormGroupButton>

            <a href='/#'>
              ¿Has olvidado tu contraseña?
            </a> 
          </form>
        </div>
    );
};

export default Login;