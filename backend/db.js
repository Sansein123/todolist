const sql = require('mssql');

const config = {
    user: 'hadahir',
    password: '666564@Has',
    server: 'taskmasters.database.windows.net',
    database: 'taskmasters'
};

sql.connect(config)
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Failed to connect to database:', err));

module.exports = sql;