import FormGroupText from '../../components/FormGroupText';
import FormGroupButton from '../../components/FormGroupButton';
import '../../stylesheet/Login.css'

const Recordar = () =>{

  const handleUser = ()=>{

  }
    return(
        <div className='contenedor-login'>
          <h1>¿Has olvidado tu contraseña?</h1>
          <form onSubmit={handleUser}>
            <FormGroupText
              label='RUC'
              name='ruc'
              type='number'
              placeholder='1717171711001'   
            />

            <FormGroupButton
              type='button'
              className='btnBoton'
              onClick=''>
                Enviar
            </FormGroupButton>
          </form>
        </div>
    );
};

export default Recordar;