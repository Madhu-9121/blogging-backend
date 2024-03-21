const commentServices = require('../services/commentservices')


const postComment = async(req,res)=>{
    try{
        const author = req.user
        const post = req.params.postId
        const {content} = req.body
        const comment = await commentServices.postComment({author,post,content})
        res.status(201).json(comment)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const getComments = async(req,res)=>{
    try{
        const author = req.user
        const post = req.params.postId
        const commnets = await commentServices.getComments(author,post)
        res.status(200).json(commnets)
    }catch(e){
        
        res.status(500).json({message:e.message})
        
    }
}
module.exports = {postComment,getComments}