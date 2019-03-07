const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());
app.use(methodOverride());

let router = express.Router();

router.get('/', (req,res)=>{
    res.send('Hello World');
});

app.use(router);

app.listen(3000,()=>{
    console.log('Node Server running on http');
});