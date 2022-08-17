const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        maxLength:[30,'name cant be more than 30 characters'],
        required : [true,'name must be provided'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
});

module.exports = mongoose.model('Task',TaskSchema);   