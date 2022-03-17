const mongoose = require("mongoose")
const teamSchema = mongoose.Schema({
  owner:{
    type:String,
    require: true
  },
  city:{
    type: String,
    require: true
  },
  informationClub:{
    type: Object,
    require: true,
    name: {
      type: String,
      require: true
    },
    stadium:{
      type: String,
      require: true
    },
    template:{
      type: Array,
      require: true
    }
  },
  informationAdditional:{
    type: Object,
    require: true,
    trophies:{
      type: Object,
      require: true,
      quantity:{
        type: Number,
        require: true
      },
      mostImportant: {
        type: String,
        require: true
      }
    },
    country: {
      name: String
    }
  }
})

module.exports = mongoose.model("ClubCollection", teamSchema)
