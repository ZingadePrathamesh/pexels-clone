const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://LevelUpIndia:LevelUpIndia@cluster0.psci2hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true,
    },
    lastName : {
        type : String,
        reuired : false
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    phoneNumber : {
        type : Number,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
})

const User = new mongoose.model("user", userSchema);

module.exports = {
User
}