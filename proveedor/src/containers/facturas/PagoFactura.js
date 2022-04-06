import FormGroupButton from '../../components/FormGroupButton';
import FormGroupText from '../../components/FormGroupText';
import '../../stylesheet/PagoFactura.css'

const PagoFactura =() =>{
    return(
        <>
          <div className='pagoBusqueda'>
            <h1>Opciones de busqueda</h1>
            <form>
              <FormGroupText
                label='Numero factura'
                type='number'
                name='factura'
              />
              <FormGroupText
                label='Fecha'
                type='number'
                name='fecha'
              />
              <FormGroupText
                label='Seleccionar empresa'
                type='number'
                name='empresa'
              />

              <FormGroupButton 
                type='button'
              >
                Buscar
              </FormGroupButton>
              
            </form>
          </div>
          <div className='pagoContenedor'>
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
                <tr>
                  <td>DANEC</td>
                  <td>001001000041651</td>
                  <td>11/03/2022</td>
                  <td>447,66</td>
                  <td>447,66</td>
                  <td>25/03/2022</td>
                  <td>02052009994-BANCO DE LA PRODUCCION</td>
                </tr>
                <tr>
                  <td>PDE</td>
                  <td>001001000041651</td>
                  <td>11/03/2022</td>
                  <td>447,66</td>
                  <td>447,66</td>
                  <td>25/03/2022</td>
                  <td>02052009994-BANCO DE LA PRODUCCION</td>
                </tr>
              </tbody>
            </table>
          </div>

        </>
    )
};

export default PagoFactura;