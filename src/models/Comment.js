const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    content:{
        type: String,
        require: true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BlogPost",
        require: true
    }

},
{
    timestamps:true
})

const Comment = mongoose.model("Comment",commentsSchema)

module.exports = Comment 