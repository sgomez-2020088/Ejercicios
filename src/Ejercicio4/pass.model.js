import  { Schema, model } from "mongoose"

const RandomPassSchema = Schema({
    long:{
        Type: Number,
        required: [true, 'Number long is required']
    },
    mayus:{
        Type: Boolean,
        required: [true, 'Mayus option is required'],
    },
    numbers:{
        Type: Boolean,
        required: [true, 'Mayus option is required'],
    },
    simbols:{
        Type: Boolean,
        required: [true, 'Mayus option is required'],
    }
})

export default model('randomPass',RandomPassSchema )