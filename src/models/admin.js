const hash = require("../utils/hash.js")
const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const adminSchema = new Schema ({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
})

/* adminSchema.pre("save", ()=>{
    this.password= hash(this.password)
}) */

const admin = model("admin", adminSchema);

module.exports=admin;