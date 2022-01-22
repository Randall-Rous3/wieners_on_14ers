const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const app = express()
const routes = require ('./routes')
const db = require('./db')
const logger = require('morgan')
const cool = require('cool-ascii-faces');
const path = require('path');
//  Your Code Here
app.use(express.json())
app.use(cors());
app.use(logger('dev'))
app.use('/api', routes)



// End Your Code Here




db.on("error", console.error.bind(console, "MongoDB connection error:"))
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))




// app.use() middleware here ^ ///////////////////

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin"
    );
    next();
  });

// app.get('/api', function (req, res, next) {
//   res.send('USER')
// }) 
