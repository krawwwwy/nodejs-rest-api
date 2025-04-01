const { Client } = require('pg');

const client = new Client({
    user: 'krawy',
    host: 'localhost',
    database: 'mydb',
    password: '1234',
    port: 5432,
});

client.connect();

module.exports = client;
