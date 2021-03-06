/* eslint-disable array-callback-return */
const { db } = require('../config')
const { pgs } = require('../models')

module.exports = {

  // insert: (body) => db.Open(pgs.pagoProveedor, body, true),
  findAll: async (req, res) => {
    const pagos = []
    const result = await db.Open(pgs.pagoProveedor, req.query, false)
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
  },

  countData: async (req, res) => {
    console.log('RUCCC: ', req.query)
    const result = await db.Open(pgs.countProveedor, req.query, false)
    const totalData = result.rows[0]
    console.log(result.rows[0])
    return totalData
  }
}
