const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('Get /feedback');
    // create a variable that defines what to retrieve from database
    const queryText = `SELECT * FROM "feedback";`;
    // use pool.query to send request to database
    pool.query(queryText)
    //send data to the client request
    .then( response => {
        res.send(response.rows);
    }).catch ( err => {
        console.log('There was an error in the server GET route', err);
        res.sendStatue(500);
    });
})

// router.post('/', (req, res) => {

// })







module.exports = router;