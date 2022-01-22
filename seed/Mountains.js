const mongoose = require("mongoose")
const Schema = mongoose.Schema
const db = require('../db')
const Mountains = require('../models/Mountains')
const Dogs = require('../models/Dogs')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const mountain = [  
        {name: "Grays Peak",  image: "https://www.uncovercolorado.com/wp-content/uploads/2020/04/grays_and_torreys_peaks-1536x1023.jpg" , range: 'Front Range' , elevation: '14,278', coordinates: '37.5826°N 105.4927°W', dogs: ("61bb789504deb2d830a6ce79")},
        {name: "Torreys Peak",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UfQJPPo2pg5H3bsLDY_QOQHaFj%26pid%3DApi&f=1" , range: 'Front Range', coordinates:"39.6428°N 105.8212°W" ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Evans",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPfkV_6FiHL0CsDitTCZJwHaFj%26pid%3DApi&f=1" , range: 'Fron Range', coordinates:"39.5883°N 105.6438°W" ,dogs:("61bb789504deb2d830a6ce78")},
        
    ]

    await Mountains.insertMany(mountain)
    console.log("Created some mountains")
}
const run = async () => {
    await main()
    db.close()
}

run()