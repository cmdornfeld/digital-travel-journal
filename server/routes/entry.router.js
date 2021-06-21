const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM ENTRY;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log(`error getting ENTRIES`, error);
        res.sendStatus(500);
    })
});


router.post();


router.put();


router.delete();


module.exports = router;