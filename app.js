const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

//const homePageController = "../controllers/homePageController";



app.use(express.static(path.join(__dirname, '')));

router.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/index.html'));

});

app.use('/', router);

app.listen(process.env.port || 3000);

//console.log('start');

//app.listen();

