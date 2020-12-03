const express = require('express')
const http = require('http')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./src/controller');
const mongoose = require('mongoose')

const app = express();
const PORT = 9001;
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// routes
routes(app);

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}, error => {
    if (error) {
        console.log(`Server failed to connect db with error = ${error}`);
        throw error;
      } else {
        console.log('Server connected successfully to the db');
        server.listen(PORT, () => {
            console.log("Server running on port:",PORT);
        })
      }
});