const express = require('express');
const app = express();
// const { User } = require('./models/index');
// const { handleCreateUser } = require('./controller/user')
const { default: mongoose } = require('mongoose');
const PORT = 3002;
 
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

async function handleCreateUser(req, res) {
    // const { fname, lname, pno, email, pass} = req.body;
    await User.create({
        firstName : req.body.fname,
        lastName : req.body.lname,
        email : req.body.email,
        phoneNumber : req.body.pno,
        password : req.body.pass,
    });
    return res.json({ "Status" : "Success" });
}

app.listen(PORT, (req, res)=>{
    console.log(`app is running on ${PORT}`);
})
app.post("/create", handleCreateUser)