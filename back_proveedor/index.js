require('dotenv').config()
const { api, PORT } = require('./api')

/* const { db } = require('./config')

db.Open()
  .then(() => console.log('Database Connect'))
  .catch((err) => console.log('Error connecting database ', err))
*/
api.listen(PORT, () => console.log(`Listening on ${PORT}`))

/*
const express = require('express')
const cors = require('cors')

const app = express()
const { Connection } = require('./config')

app.use(cors())
// cuando necesito hacer un body u otras cosas utilizamos
app.use(express.json())

// app.use(logger)

// En que path
app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
  //const sql = ' select * from gc_responsable '
  //Connection.open(sql, [], false, response)
 // console.log(response)
})
*/
// Para Heroku siempres asi
// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//  console.log(`Sever running on port ${PORT}`)
// })
