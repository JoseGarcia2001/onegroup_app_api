/* eslint-disable no-useless-escape */
const { Schema, model } = require('mongoose')

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    unique: true
  },
  password: { type: String, required: true }
})

// Delete password on response
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.password
  }
})

const User = model('User', userSchema)

module.exports = User
