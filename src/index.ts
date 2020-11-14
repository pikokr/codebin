import express from 'express'

const app = express()

app.use(express.json())

app.use('/api', require('./routing').default)

app.listen(3060)
