const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) =>{
    res.send('Hi pongnarin');
})

app.listen(port, ()=>{
    debug("Listening on port: "+chalk.red(port));
})
