const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true ,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        unique:[true, "Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Inavlid Error");
            }
        }

    },
    phone: {
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address: {
        type:String,
        required:true
    }

})

//New COllection using Model

const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;