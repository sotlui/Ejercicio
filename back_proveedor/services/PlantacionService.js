/* eslint-disable array-callback-return */
const { db } = require('../config')
const { pnl } = require('../models')

module.exports = {

  insert: (body) => db.Open(pnl.sqlInsert, body, true),
  findAll: async () => {
    const plantacion = []
    const result = await db.Open(pnl.sqlFindAll, [], false)
    result.rows.map(pln => {
      const plantacionSchema = {
        plidplt: pln[0],
        plaa05: pln[1],
        plmd: pln[2],
        plky: pln[3],
        plev01: pln[4],
        plmcu: pln[5],
        plan8: pln[6],
        plctr: pln[7],
        plan81: pln[8],
        plkco: pln[9],
        plev02: pln[10],
        pladds: pln[11],
        plcty1: pln[12],
        pladd1: pln[13],
        pladd2: pln[14],
        plan8c: pln[15],
        plaa: pln[16],
        plaap: pln[17],
        plaurst1: pln[18],
        plaa03: pln[19],
        pltyrs: pln[20],
        pluser: pln[21],
        plupmj: pln[22],
        plupmt: pln[23],
        pljobn: pln[24],
        plactiveyn: pln[25],
        plaa02: pln[26],
        plccgr: pln[27],
        pldct: pln[28]
      }
      plantacion.push(plantacionSchema)
    })
    return plantacion
  }
}
