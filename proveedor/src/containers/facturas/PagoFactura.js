import axios from "axios";
import FormGroupButton from "../../components/FormGroupButton";
import FormGroupText from "../../components/FormGroupText";
import { useEffect, useState } from "react";
import "../../stylesheet/PagoFactura.css";
import { urlPagos } from "../../utils/endpints";
import Paginacion from "utils/paginacion";

const PagoFactura = () => {
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    axios
      .get(`${urlPagos}/0503260168`)
      .then((result) => {
        setTotalData(Math.ceil(JSON.parse(result.data.totalData/recordsPorPagina)));
        console.log("TOTALTPAGE; ", Math.ceil(JSON.parse(result.data.totalData/recordsPorPagina)));

      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1]);

  const [data, setData] = useState([]);
  const [contador, setContador] = useState(1);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [rowsRecords, setRowsRecords] = useState(10);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    cargarDatos();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina, rowsRecords]);

  function cargarDatos() {
    axios
      .get(urlPagos, {
        params: { rowsRecords: rowsRecords, pagina: pagina },
      })
      .then((respuesta) => {
        console.log("AQQUUUUQUQ: ", respuesta.data.pago);
        setData(respuesta.data.pago);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="pagoBusqueda">
        <h1>Opciones de busqueda</h1>
        <form>
          <FormGroupText label="Numero factura" type="number" name="factura" />
          <FormGroupText label="Fecha" type="number" name="fecha" />
          <FormGroupText
            label="Seleccionar empresa"
            type="number"
            name="empresa"
          />

          <FormGroupButton type="button">Buscar</FormGroupButton>
        </form>
      </div>
      <div className="pagoContenedor">
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Num de Factura</th>
              <th>Fec Factura</th>
              <th>Imp Bruto</th>
              <th>Imp Pago</th>
              <th>Fec Pago</th>
              <th>Cuenta Pago</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((pago) => (
                  <tr key={pago.num_factura}>
                    <td>{pago.nombre_empresa}</td>
                    <td>{pago.num_factura}</td>
                    <td>{pago.fecha_factura}</td>
                    <td>{pago.importe_bruto.toFixed(2)}</td>
                    <td>{pago.importe_pago.toFixed(2)}</td>
                    <td>{pago.fecha_pago}</td>
                    <td>{pago.cuenta_pago}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <Paginacion
          totalPages={totalData}
          paginaActual={pagina}
          contador={contador}
          rowsRecords={rowsRecords}
          recordsPorPagina={recordsPorPagina}
          onChange={(nuevaPagina, rowsPerPagina, contador) => {
            setPagina(nuevaPagina);
            setRowsRecords(rowsPerPagina);
            setContador(contador);
          }}
        />
      </div>
    </>
  );
};

export default PagoFactura;
