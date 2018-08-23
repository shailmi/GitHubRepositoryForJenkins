//Websites for study -
//https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
//  res.sendFile("./UI/Home.html", { root: __dirname})
res.sendFile("./UI/Index.html", { root: __dirname})
 
// fs.readFile('Home.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });


});

 
app.listen(3000, function() {
 console.log("Server is running at 3000 port!");
});

// //Create DB connection
// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/mydb");
// //DB Schema
// var nameSchema = new mongoose.Schema({
//     firstName: String,
//     lastNameName: String
//    });

//    //Create model
//    var User = mongoose.model("User", nameSchema);

//    var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// app.post("/addname", (req, res) => {
//     var myData = new User(req.body);
//     myData.save()
//     .then(item => {
//     res.send("item saved to database");
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
//    });


// app.post("/addname", middleWareFunc,  (req, res) => {
//     var myData = new User(req.body);
//     myData.save()
//     .then(item => {
//     res.send("item saved to database");
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
//    });
// var middleWareFunc = function(req, res){
//     consol.log(req)
// };
// var express = require('express');
// var app = express();
// var path = require('path');

// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + 'Home.html'));
// });

// app.listen(3000);

//------------------
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('Home.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
  