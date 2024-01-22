const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const url = 'mongodb://localhost:27017/employeeDB'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
  console.log('connected...')
})
app.use(express.json())
//Middleware
const employeeRouter = require('./routers/employee')
app.use('/employee', employeeRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
