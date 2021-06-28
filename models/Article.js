const { Schema, model } = require('mongoose')

const articlesSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: '/static/product.png' },
  rating: { type: Number, min: 0, max: 5, required: true }
})

const Article = model('Article', articlesSchema)

module.exports = Article
