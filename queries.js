const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'usertest',
    host: 'localhost',
    database: 'api',
    password: 'testuser',
    port: 5432,
})

const getCountries = (request, response) => {
    pool.query('SELECT * FROM countries ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCountryById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM countries WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}