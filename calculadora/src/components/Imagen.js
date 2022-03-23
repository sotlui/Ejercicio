import '../stylesheet/Imagen.css'

const Imagen = ({ freeCodeCampLogo }) => {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
      />
    </div>
  )
}

export default Imagen
