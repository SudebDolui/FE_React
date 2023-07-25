const port = 3535;
/*
# Using node 
http = require('http');

app = http.createServer((req, res) => {
    console.log("Received an incoming request");
    let message = "<h1>Hello World</h1>";
    res.write(message);
    res.end();
    console.log("Sent a response" + message);
});
*/

/* 
# Using Express
*/

const expressInst = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = "mongodb://127.0.0.1:27017/mouridb";
const db = mongoose.connection;
const app = expressInst();
const bookRoutes = require('./routes/bookRoutes')

// # Parse requests of content-type -application/x-ww
app.use(bodyParser.urlencoded({extended: true}));

// # Parse requests of content-type -application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(url, {useNewUrlParser: true});

db.once("open", () => console.log("Successfully connected to MongoDB using Mongoose"));

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Book World"})
});

// # using as middleware.

app.use('/api/books', bookRoutes);

// const Book = require('./models/books');
// var query = Book.findOne({author: "Victor Hugo"});
// query.exec((error, data) => {
//     if(data) console.log(data)
// });

// app.get("/home", (req, res) => {
//     console.log(req.url);
//     console.log(req.body);
//     res.send("Hello Universe");
// });

// app.get("/aboutus", (req, res) => {
//     console.log(req.url);
//     console.log(req.body);
//     res.send("About Us");
// });

app.listen(port);
console.log("The server has started and is listening on port number" + port);