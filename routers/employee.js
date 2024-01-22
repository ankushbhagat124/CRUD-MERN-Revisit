const express = require('express')
const router = express.Router()
const employeeDB = require('../models/employeeDB')

router.get('/', async (req, res) => {
  try {
    const employees = await employeeDB.find()
    res.json(employees)
  } catch (err) {
    res.send('Error ' + err)
  }
})

router.get('/:name', async (req, res) => {
  try {
    const employee = await employeeDB.find({
      name: req.params.name,
    })
    res.json(employee)
  } catch (err) {
    res.send('Error ' + err)
  }
})

router.post('/', async (req, res) => {
  const employee = new employeeDB({
    name: req.body.name,
    designation: req.body.designation,
    salary: req.body.salary,
  })

  try {
    const a1 = await employee.save()
    res.json(a1)
  } catch (err) {
    res.send('Error')
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const employee = await employeeDB.findById(req.params.id)
    //Looping through request body and updating based on id
    for (let i in req.body) {
      employee[i] = req.body[i]
    }
    const a1 = await employee.save()
    res.json(a1)
  } catch (err) {
    res.send('Error')
  }
})

module.exports = router
