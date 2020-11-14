import db from '../../../utils/db'

export default async (req, res) => {
  let start = isNaN(Number(req.query.start)) ? 0 : Number(req.query.start)
  let end = isNaN(Number(req.query.end)) ? 10 : Number(req.query.end)

  const result = await db.knex('posts')

  res.statusCode = 200
  res.json(result.filter(r=>r.title.includes(req.query.query) || r.content.includes(req.query.query)).slice(start, end))
}
