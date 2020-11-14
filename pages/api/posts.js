import db from '../../utils/db'

export default async (req, res) => {
  let start = isNaN(Number(req.query.start)) ? 0 : Number(req.query.start)
  let end = isNaN(Number(req.query.end)) ? 30 : Number(req.query.end)

  const result = await db('posts')

  res.statusCode = 200
  res.json(result.slice(start, end))
}
