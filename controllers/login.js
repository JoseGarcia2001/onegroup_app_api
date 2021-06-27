const loginRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

loginRouter.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) throw new Error()

    const user = await User.findOne({ email })

    if (!user) res.status(401).json({ error: 'The username and password do not match' })

    const match = await bcrypt.compare(password, user.password)

    if (match) {
      const { _id, email } = user
      const token = jwt.sign({ _id, email }, process.env.JWT_SECRET)

      res.status(202).json({ token, data: { _id, email } })
    } else { res.status(401).json({ error: 'The username and password do not match' }) }
  } catch (error) {
    next(error)
  }
})

module.exports = loginRouter
