const ERROR_HANDLERS = {

  CastError: (res) =>
    res.status(400).send({ error: 'Bad id format' }),

  ValidationError: (res) =>
    res.status(400).send({ error: 'Validation failed, request format not completed' }),

  Error: (res) =>
    res.status(400).send({ error: 'Validation failed, request format not completed' }),

  MongoError: (res) =>
    res.status(400).send({ error: 'User already taken' }),

  JsonWebTokenError: (res, err) =>
    res.status(401).send({ error: err.message }),

  defaultError: (res) =>
    res.status(500).end()

}

const manageError = (err, req, res, next) => {
  console.log(err)

  const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
  handler(res, err)
}

module.exports = manageError
