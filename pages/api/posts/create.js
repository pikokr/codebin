import db from '../../../utils/db'
import * as uuid from 'uuid'

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405
    return res.json({error: 'Method not allowed'})
  }
  if (typeof req.body !== 'object') {
    return res.json({error: 'Request body must be JSON'})
  }
  if (!req.body.content) {
    return res.json({error: 'Body must contain content.'})
  }
  const data = {
    title: req.body.title || null,
    content: req.body.content,
    id: uuid.v4()
  }

  const r  = await db.knex('posts').insert(data)

  res.json({id: data.id})
}
