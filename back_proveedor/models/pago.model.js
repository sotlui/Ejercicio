const pagoProveedor = ` select * from(
    select a.*, rownum row_num from( 
      select p.nombre_empresa, p.num_factura, to_char(p.fecha_factura,'dd/mm/yyyy') fecha_factura, p.importe_bruto, p.importe_pago, to_char(p.fecha_pago,'dd/mm/yyyy') fecha_pago, p.cuenta_pago    
      from qry_webcp.v_qryweb_pagos_ejecutados p  
      where p.cedula_o_ruc ='1791889789001'
      order by p.fecha_pago desc
    ) a 
  where rownum <=10) where row_num >0 `

const countProveedor = ` select count (p.cod_proveedor) totalPagos from qry_webcp.v_qryweb_pagos_ejecutados p  
where p.cedula_o_ruc ='1791889789001' `

module.exports = { pagoProveedor, countProveedor }
