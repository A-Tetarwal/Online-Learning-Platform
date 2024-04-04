const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-project.mysql.database.azure.com',
    user: 'a_tetarwal',
    password: 'Qbeta@123',
    database: 'onlineed' 
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');

    // Execute a simple SELECT query
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Query results:', results);
    });

    // Don't forget to close the connection when done
    connection.end((err) => {
        if (err) {
            console.error('Error ending connection:', err);
            return;
        }
        console.log('Connection closed');
    });
});
