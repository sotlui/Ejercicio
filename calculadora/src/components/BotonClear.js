import '../stylesheet/BotonClear.css'

const BotonCrear = (props) => (
  <div
    className='boton-clear'
    onClick={() => props.onClic()}
  >
    {props.children}
  </div>
)

export default BotonCrear
