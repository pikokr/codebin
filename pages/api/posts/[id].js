import db from '../../../utils/db'

export default async (req, res) => {
    const data = (await db.knex('posts').where({id: req.query.id}).limit(1))[0]
    if (data) {
        res.status = 200
        res.json(data)
    } else {
        res.status = 404
        res.json({error: 'Post not found'})
    }
}
