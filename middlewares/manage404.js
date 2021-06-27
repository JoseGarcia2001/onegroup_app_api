const manage404 = (req, res) => {
  res.status(404).send({ error: '404 not found' })
}

module.exports = manage404
