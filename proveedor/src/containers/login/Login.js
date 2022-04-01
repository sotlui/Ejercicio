import FormGroupText from '../../components/FormGroupText';
import FormGroupButton from '../../components/FormGroupButton';
import '../../stylesheet/Login.css'

const Login = () =>{

  const handleUser = ()=>{

  }
    return(
        <div className='contenedor-login'>
          <form onSubmit={handleUser}>
            <FormGroupText
              label='Usuario'
              name='usuario'
              type='email'
              placeholder='lsoto@danec.com'   
            />
            <FormGroupText
              label='Password:'
              name='password'
              type='password'
              placeholder='*******'   
            />
            <FormGroupButton
              type='submit'
              className='btnLogin'
              onClick=''>
                Login
            </FormGroupButton>
          </form>
        </div>
    );
};

export default Login;