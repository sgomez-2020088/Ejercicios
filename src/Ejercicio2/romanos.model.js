//Modelo
import mongoose, { Schema, model } from "mongoose";

const romanoModel = mongoose.Schema({
    number:{
        type: String,
        required: true
    }
})

export default mongoose.model('Romano', romanoModel)