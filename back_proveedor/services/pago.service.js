/* eslint-disable array-callback-return */
const { db } = require('../config')
const { pgs } = require('../models')

module.exports = {

  // insert: (body) => db.Open(pgs.pagoProveedor, body, true),
  findAll: async () => {
    const pagos = []
    const result = await db.Open(pgs.pagoProveedor, [], false)
    result.rows.map(pg => {
      const pagoSchema = {
        nombre_empresa: pg[0],
        num_factura: pg[1],
        fecha_factura: pg[2],
        importe_bruto: pg[3],
        importe_pago: pg[4],
        fecha_pago: pg[5],
        cuenta_pago: pg[6]
      }
      pagos.push(pagoSchema)
    })
    return pagos
  }
}
