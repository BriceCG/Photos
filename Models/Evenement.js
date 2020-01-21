let mongoose = require('mongoose');
const evenementSchema = mongoose.Schema({
    titre:{
        type:String,
        unique: true,
        lower:true,
        required:true
    },
    type: {
        type:String,
        lower:true,
        requred:true,
    }
})
module.exports = mongoose.model('evenement',evenementSchema);