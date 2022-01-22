const mongoose = require("mongoose")
const Schema = mongoose.Schema
const db = require('../db')
const Dogs = require('../models/Dogs')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const dog = [  
        {name: 'Dot' ,breed: 'Mutt' ,date:'12/16/2021', image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-b20e3fc9bd3907367ad437beb6254681&f=1&nofb=1', location: "Mt.Sherman" } ,
        {name: 'potato' ,breed: 'Mutt' ,date:'12/16/2021', image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-9ce1fca5e6dd173d02f3996c3f0e5c0f&f=1&nofb=1', location: "Quandry"} ,
          
    ]

    await Dogs.insertMany(dog)
    console.log("Created Dogs")
}
const run = async () => {
    await main()
    db.close()
}

run()