const fs = require('fs');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    fs.appendFile("index.txt", req.body.login+' : '+req.body.pwd+'\n', function(error){
        if(error) throw error; // если возникла ошибка
        console.log("Complete!");
        // console.log(data);  // выводим считанные данные
    });
    console.log(req.body.login, req.body.pwd);
    // res.render('index');
    res.redirect('/')
});

module.exports = router;
