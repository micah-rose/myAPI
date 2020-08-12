const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'usertest',
    host: 'localhost',
    database: 'api',
    password: 'testuser',
    port: 5432,
})