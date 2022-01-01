const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

app.use(express.static(path.join(__dirname, '')));

router.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/index.html'));

});
router.get('/store',function(req,res){

  res.sendFile(path.join(__dirname+'/store.html'));

});
router.get('/support',function(req,res){

  res.sendFile(path.join(__dirname+'/support.html'));

});
router.get('/corporate',function(req,res){

  res.sendFile(path.join(__dirname+'/corporate.html'));

});

app.use('/', router);

app.listen(process.env.port || 3000);

//console.log('start');

//app.listen();

