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
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
  }



db.on("error", console.error.bind(console, "MongoDB connection error:"))
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))




// app.use() middleware here ^ ///////////////////


