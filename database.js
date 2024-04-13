const fs = require('fs');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sslOptions = {
    ca: fs.readFileSync('path/to/ca.crt'), // Path to CA certificate
    cert: fs.readFileSync('path/to/client.crt'), // Path to client certificate
    key: fs.readFileSync('path/to/client.key'), // Path to client private key
};

const connection = mysql.createConnection({
    host: 'mysql-project.mysql.database.azure.com',
    user: 'a_tetarwal',
    password: 'Qbeta@123',
    database: 'onlineEd',
    ssl: sslOptions
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.post('/register', (req, res) => {
    const { username, email, password, confirm_password, user_type } = req.body;

    // Check if passwords match
    if (password !== confirm_password) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Insert data into MySQL database
    const sql = 'INSERT INTO users (username, email, password, user_type) VALUES (?, ?, ?, ?)';
    connection.query(sql, [username, email, password, user_type], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.status(500).json({ error: 'Failed to register user' });
        }
        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
