const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// router.get('/', (req, res) => {
//     console.log('Get /feedback');
//     // create a variable that defines what to retrieve from database
//     const queryText = `SELECT * FROM "feedback";`;
//     // use pool.query to send request to database
//     pool.query(queryText)
//     //send data to the client request
//     .then( response => {
//         res.send(response.rows);
//     }).catch ( err => {
//         console.log('There was an error in the server GET route', err);
//         res.sendStatue(500);
//     });
// })

router.post('/', (req, res) => {
    console.log('In server router, req.body is', req.body);
    // create a variable that contains the user info
    const newData = req.body;
    //need to sanitize the user input to send to database
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    //use pool.query to send to server
    pool.query(queryText, [newData.feeling, newData.understanding, newData.support, newData.comments])
    .then( response => {
        res.sendStatus(201);
    }).catch( err => {
        console.log('There was an error in the POST route', err);
        res.sendStatus(500);
    })
})







module.exports = router;