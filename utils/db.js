import knex from 'knex'

export default class Database {
    static knex = knex({
        client: 'pg',
        connection: process.env.DB_CONN
    })
}
