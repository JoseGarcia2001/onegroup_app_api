require('dotenv').config()

const cors = require('cors')
const path = require('path')
const express = require('express')
const manageError = require('./middlewares/manageError')
const manage404 = require('./middlewares/manage404')
const articlesRouter = require('./controllers/articles')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const app = express()

// Mongo Connection
require('./mongo')

app.use(cors())
app.use(express.json())
app.use('/static', express.static(path.join(__dirname, 'public')))

//  End points
app.use('/api/articles', articlesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

// Manage errors and 404
app.use(manageError)
app.use(manage404)

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
})
