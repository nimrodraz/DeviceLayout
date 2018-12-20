//use the 3rd party "express" to host a server and wait for the restfull api calls
const express = require('express');
const app = express();
const pages = require('./routes/pages')

//allow cors  (accept calls from other domains)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//use all request from api/pages use the pages router
app.use('/api/pages/',pages);

//get port for the server..
//if we have enviorment variable called "PORT" than get use it (like in prod server), if not, set it to 3000 (dev)
//to set envioment variabled on windows, write on terminal $env:PORT=6000
const port = process.env.PORT || 4019; 

//run server and listen for web api calls
app.listen(port, ()=> console.log(`Listening on port ${port} ..`));




