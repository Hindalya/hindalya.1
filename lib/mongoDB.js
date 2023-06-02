export default function db() {
    const mongoose = require("mongoose");
    const dotenv = require("dotenv");
    const uri = process.env.MONGODB_URI;
    dotenv.config();
    if(!uri){
        throw new Error("Invalid enviroment variable: MONGODB_URI");
    }
    mongoose.connect(uri)
    .then(()=>{
        console.log("database connection stablished successfully...");
    }).catch((err)=>{
        console.log("no connection " + err);
    });
}

