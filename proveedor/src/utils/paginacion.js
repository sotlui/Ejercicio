const Paginacion = (props) =>{

  const totalPages = props.totalPages
  const recordsPorPagina = props.recordsPorPagina
  let rowsRecords = props.rowsRecords
  let pagina = props.paginaActual;
  let contador = 1;


  const seleccionarPagina = () =>{
    contador++
    pagina=rowsRecords
    rowsRecords = recordsPorPagina * contador;
    console.log('PAGINA: ',pagina, 'RECOr ', rowsRecords, 'Contador;: ', contador);
    props.onChange(pagina)
  }

  return(
    <div>
      <button onClick={()=>seleccionarPagina()}>
      Atras
      </button>
    </div>
  )
}



export default Paginacion

