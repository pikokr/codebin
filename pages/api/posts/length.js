import db from '../../../utils/db'

export default async (req, res) => {
  const result = await db('posts')

  res.statusCode = 200
  res.json(result.length)
}
