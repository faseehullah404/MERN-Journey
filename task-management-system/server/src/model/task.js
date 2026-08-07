import mongoose from "mongoose"

const taskschema= new mongoose.Schema({
    title:{
    type: String,
    required: true

    }

})