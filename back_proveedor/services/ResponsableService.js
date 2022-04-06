const { db } = require('../config')

const sqlInsert = 'insert into sian.rh_periodo (pei_id, pei_fecha_inicio, pei_fecha_fin, pei_descripcion,' +
    ' pei_estado, pei_rol, pei_sistema, pei_empresa, pei_agecnia) values(:1, :2, :3, :4, :5, :6, :7, :8, :9)'

const sqlFindAll = 'SELECT * FROM RH_PERIODO'

module.exports = {
  insert: (body) => db.Open(sqlInsert, [body], false),
  findAll: async () => {
    const periodo = []
    const result = await db.Open(sqlFindAll, [], false)
    // eslint-disable-next-line array-callback-return
    result.rows.map(period => {
      const perSechema = {
        id: period[0],
        fech_inicio: period[1],
        fech_fin: period[2],
        descripcion: period[3]
      }
      periodo.push(perSechema)
    })
    console.log(periodo)
    return periodo
  }
}
