var express = require('express');
 var app  = express();
 var path = require('path');

 app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname + '/index.html'));
 });

 app.listen(1337); // sorry
 var adminRouter=express.Router();



adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!');
 });

adminRouter.get('/users', function(req, res) {
 res.send('I show all the users');
 });

adminRouter.get('/posts', function(req, res) {
 res.send('I show all the dashboard!');
 });


app.use('/admin', adminRouter);

adminRouter.get('/users/:name', function(req, res) {
 res.send('hello ' + req.params.name + '!');
 });





 console.log('1337 is the magic port!');


