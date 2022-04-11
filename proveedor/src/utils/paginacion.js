import { useState } from "react";

const Paginacion = (props) => {
  const [back, setBack] = useState(false);
  const totalPage = props.totalPages;
  console.log("TP: ", totalPage);
  const recordsPorPagina = props.recordsPorPagina;
  let rowsRecords = props.rowsRecords;
  let pagina = props.paginaActual;
  let contador = props.contador;

  const nextPagina = () => {
    contador++;
    console.log("Conado: ", contador, "RECODIR ACU", rowsRecords);
    pagina = rowsRecords;
    console.log("PAgina: ", pagina);
    rowsRecords = recordsPorPagina * contador;
    console.log(rowsRecords, "Contador;: ", contador);
    props.onChange(pagina, rowsRecords, contador);
    contador === totalPage ? setBack(true) : setBack(false);
  };

  const backPagina = () => {
    console.log("PAGINA: ", pagina, "ROWs: ", rowsRecords);
    contador--;
    rowsRecords = recordsPorPagina * contador;
    pagina = rowsRecords - recordsPorPagina;
    console.log("PAGINA: ", pagina, "ROWs: ", rowsRecords);
    props.onChange(pagina, rowsRecords, contador);
    contador === 1 ? setBack(true) : setBack(false);
  };

  return (
    <div>
      <button onClick={() => backPagina()} disabled={back}>
        Atras
      </button>
      {contador}
      <button onClick={() => nextPagina()} disabled={back}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
