const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Dogs = new Schema(
  {
    ObjectId: {type: String},
    name: { type: String, required: true },
    breed: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true},
    description: {type: String},
    location: {type: String, required: true }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('dogs', Dogs)