const Comment = require('../models/Comment')

const postComment = async (data)=>{
    try{
        console.log(data)
        const comment = await Comment.create(data);
        return comment;

    }catch(e){
        throw e
    }
}
const getComments =async (author,blogId)=>{
    try{
        const comments = Comment.find({author:author,post:blogId})
        return comments

    }catch(e){
        throw e
    }
}
module.exports = {postComment,getComments}