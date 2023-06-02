import { Schema, model , models } from "mongoose";

const userSchema = new Schema({
    emails:{
        type:String,
        unique: true,
        required: [true, "Email is required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/,"Invalid email address"]
    },
    fullName:{
        type:String,
        required: [true, "Full name is required"],
        minLength: [4, "Full Name should be atleast 4 characters long"],
        maxLength:[30, "Full Name should be less than 30 characters"]
    },
    password:{
        type:String,
        required: [true, "Password is required"],
        select: false
    }
});
const User = models.User || model("User",userSchema);

export default User;