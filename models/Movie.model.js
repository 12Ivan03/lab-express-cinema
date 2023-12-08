const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title:{
        type: String,
        requierd: true 
    },
    director:{
        type: String,
        required: true
    },
    stars:{
        type: [String]
    },
    image:{
        type: String
    },
    description:{
        type: String,
        maxLength: 500
    },
    showtimes:{
        type: [String],
        required : true 
    }
})

const Movies = mongoose.model('Movies', movieSchema)
module.exports = Movies;