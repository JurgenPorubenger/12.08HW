const fs = require('fs');
const express = require('express');
const router = express.Router();
let toJSON = require('plain-text-data-to-json');



router.post('/', function(req, res, next) {
    let list = fs.readFileSync("index.txt", 'utf8');
    let listToJson = toJSON(list);
    res.send(`<h3>${JSON.stringify(listToJson)}</h3>`);
});

module.exports = router;



