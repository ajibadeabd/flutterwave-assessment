import mongoose from 'mongoose'
const  {Schema,model} = mongoose
import  bcrypt  from 'bcryptjs'
// const { string } = require('joi')
let usersSchema= new Schema({
    lastName:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    otpExp:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true,
        enum:["user","admin"],
        default:"user"
    },
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:true
    },
},
{timestamps:true})

usersSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  });

export default  mongoose.model('users', usersSchema)