const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Mountain = new Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String, required: false }],
    range:{ type: String, required:true },
    coordinates: {type: String},
    description: {type: String},
    elevation:{type: String},
    dogs: [{ type: Schema.Types.ObjectId, ref: 'dogs'}]
  },
  { timestamps: true }
)

module.exports = mongoose.model("moutains", Mountain)