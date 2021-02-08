const mongoose = require("mongoose")

const {Schema, model} = mongoose;

const blogPostSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    comment:{
        type:String,
    },
    dateTime:{
        type:Date,
        default:Date.now()
    }
})

const blogPost = model("blogPost", blogPostSchema);

module.exports=blogPost;