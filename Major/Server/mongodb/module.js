import mongoose from "mongoose";





const register = new mongoose.Schema({
    fullname:{type:String},
    region:{type:String},
    resume:{type:String},
    mob_number:{type:String},
    degree:{type:String}

})


export const Student = mongoose.model("Register",register)