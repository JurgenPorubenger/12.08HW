const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);


app.listen(3000, ()=>console.log('listen 3000'));

module.exports = app;