const articlesRouter = require('express').Router()
const Article = require('../models/Article')
const jwtSecurity = require('../middlewares/jwtSecurity')
const path = require('path')

articlesRouter.get('/', jwtSecurity, async (req, res, next) => {
  try {
    const allArticles = await Article.find({})

    res.json(allArticles)
  } catch (error) {
    next(error)
  }
})

articlesRouter.get('/:id', jwtSecurity, async (req, res, next) => {
  try {
    const { id } = req.params
    const article = await Article.findById(id)
    if (!article) { res.status(400).json({ error: 'Invalid ID' }) }

    res.json(article)
  } catch (error) {
    next(error)
  }
})

articlesRouter.post('/', jwtSecurity, async (req, res, next) => {
  try {
    const image = req.files.image
    const { title, price, rating } = req.body

    image.mv(path.resolve('./public/' + image.name))

    const createdArticle = await Article
      .create({
        title,
        price,
        image: `/static/${image.name}`,
        rating
      })

    res.status(201).json(createdArticle)
  } catch (error) {
    next(error)
  }
})

articlesRouter.put('/:id', jwtSecurity, async (req, res, next) => {
  try {
    const propsToUpdate = req.body
    const { id } = req.params
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { ...propsToUpdate },
      { new: true }
    )

    res.json(updatedArticle)
  } catch (error) {
    next(error)
  }
})

articlesRouter.delete('/:id', jwtSecurity, async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedArticle = await Article.findByIdAndDelete(id)

    if (!deletedArticle) return res.status(400).json({ error: 'Invalid ID' })

    res.json(deletedArticle)
  } catch (error) {
    next(error)
  }
})

module.exports = articlesRouter
