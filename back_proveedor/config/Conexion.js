const oracledb = require('oracledb')

const db = {
  user: 'qry_webcp',
  password: 'webcp2021',
  connectString: 'ORALINUX'
  // poolIncrement: 1,
  // poolMin: 4,
  // poolMax: 4
}

const open = async (sql, binds, dml) => {
  const con = await oracledb.getConnection(db)
  // const ins = Object.assign({}, binds)
  console.log(binds)
  console.log(con.execute(sql, binds, { autoCommit: dml }))
  const result = await con.execute(sql, binds, { autoCommit: dml })
  con.release()
  return result
}

exports.Open = open
