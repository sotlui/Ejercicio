const { connection } = require('./Connection')

const error = (err, rs, cn) => {
  console.log('Dentro ', err)
  if (err) {
    console.log(err.message)
    rs.contentType('application/json').status(500)
    rs.send(err.message)
    if (cn !== null) close(cn)
    return -1
  } else {
    return 0
  }
}

const open = (sql, binds, dml, rs) => {
  connection((err, cn) => {
    console.log('AQUIII')
    if (error(err, rs, null) === -1) return
    cn.execute(sql, binds, { autoCommit: dml }, (err, result) => {
      if (error(err, rs, cn) === -1) return
      rs.contentType('application/json').status(200)
      if (dml) {
        rs.send(JSON.stringify(result.rowsAffected))
      } else {
        console.log(result.metaData)
        rs.send(JSON.stringify(result.rows))
      }
      close(cn)
    })
  })
}

const close = (cn) => {
  cn.release((err) => {
    if (err) {
      console.error(err.message)
    }
  })
}

module.exports = { open, close }
