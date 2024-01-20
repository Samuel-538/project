 
// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); // Assuming your HTML file is in a 'public' folder

// MongoDB Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'sam';

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Connect to MongoDB
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to the database', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const db = client.db(dbName);
        const collection = db.collection('users'); // Replace 'users' with your collection name

        // Perform a query to check the user's credentials
        collection.findOne({ email: email, password: password }, (err, user) => {
            if (err) {
                console.error('Error querying the database', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            if (user) {
                res.send('Login successful'); // Replace this with your desired response
            } else {
                res.redirect('/401.html'); // Redirect to 401.html for unsuccessful login
            }

            client.close();
        });
    });
});

app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});