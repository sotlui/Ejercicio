import FormGroupText from '../../components/FormGroupText';
import FormGroupButton from '../../components/FormGroupButton';
import '../../stylesheet/Login.css'

const Register = () =>{

  const handleUser = ()=>{

  }
    return(
        <div className='contenedor-login'>
          <h1>Registrar un cuenta</h1>
          <form onSubmit={handleUser}>
            <FormGroupText
              label='RUC'
              name='ruc'
              type='number'
              placeholder='1717171711001'   
            />
            <FormGroupText
              label='Email'
              name='email'
              type='email'
              placeholder='micuenta@retension.com'   
            />
            <FormGroupButton
              type='button'
              className='btnBoton'
              onClick=''>
                Registrar
            </FormGroupButton>
          </form>
        </div>
    );
};

export default Register;