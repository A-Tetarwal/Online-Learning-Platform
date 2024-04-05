const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Qbeta@123',
    database: 'Students' 
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');

    // Execute a simple SELECT query
    connection.query('Create Table lol (id int);', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Query results:', results);
    });

});
