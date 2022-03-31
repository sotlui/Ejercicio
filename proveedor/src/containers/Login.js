import FormGroupText from '../components/FormGroupText';
import '../stylesheet/Login.css'

const Login = () =>{
    return(
        <div className='contenedor-login'>
            <FormGroupText
              label='Usuario'
              name='usuario'
              type='text'
              placeholder='lsoto@danec.com'   
            />
            <FormGroupText
              label='Password:'
              name='password'
              type='password'
              placeholder='*******'   
            />
        </div>
    );
};

export default Login;