import db from '../../utils/db'

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
