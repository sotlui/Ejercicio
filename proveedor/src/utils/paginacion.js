import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import "stylesheet/Paginacion.css";

const Paginacion = (props) => {
  const [back, setBack] = useState(false);
  const [next, setNext] = useState(false);
  const totalPage = props.totalPages;
  //console.log("TP: ", totalPage);
  const recordsPorPagina = props.recordsPorPagina;
  let rowsRecords = props.rowsRecords;
  let pagina = props.paginaActual;
  let contador = props.contador;

  const nextPagina = () => {
    contador++;
    //console.log("Conado: ", contador, "RECODIR ACU", rowsRecords);
    pagina = rowsRecords;
    //console.log("PAgina: ", pagina);
    rowsRecords = recordsPorPagina * contador;
    //console.log(rowsRecords, "Contador;: ", contador);
    props.onChange(pagina, rowsRecords, contador);
    contador === totalPage ? setNext(true) : setNext(false);
    setBack(false);
  };

  const backPagina = () => {
    //console.log("PAGINA: ", pagina, "ROWs: ", rowsRecords);
    contador--;
    rowsRecords = recordsPorPagina * contador;
    pagina = rowsRecords - recordsPorPagina;
    //console.log("PAGINA: ", pagina, "ROWs: ", rowsRecords);
    props.onChange(pagina, rowsRecords, contador);
    contador === 1 ? setBack(true) : setBack(false);
    setNext(false);
  };

  return (
    <div className="paginacion-contenedor">
      <button className="btnBack" onClick={() => backPagina()} disabled={back}>
        <AiOutlineLeft className="tarea-icono" />
      </button>
      <span>{contador}</span>
      <button className="btnNext" onClick={() => nextPagina()} disabled={next}>
        <AiOutlineRight className="tarea-icono" />
      </button>
    </div>
  );
};

export default Paginacion;
