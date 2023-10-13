const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: "./config.env"});

const mongoUri = "mongodb+srv://clixicon:skyline123@cluster0.a74at.mongodb.net/makeExam?retryWrites=true&w=majority";

const connection = () => {
    mongoose.connect(mongoUri).then(()=> {
        console.log("Connection Successful");
    }).catch( (err) => {
        console.log(err)
    })
}

module.exports = connection;