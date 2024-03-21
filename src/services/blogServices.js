const BlogPost = require('../models/BlogPost')
const User = require('../models/User')
const createBlog = async (data)=>{
    try{
        console.log(data)

        const blogCreated = await BlogPost.create(data) 
        return blogCreated

    }catch(e){
        throw e
    }

}
const getBlogs = async(author)=>{
    try{
        const blogs = await BlogPost.find({author:author})
        return blogs

    }catch(e){
        throw e
    }
}
const updateBlog = async(author,data,id)=>{
    try{
        const modify = await BlogPost.findByIdAndUpdate(
            {author:author,_id:id},
            {$set:data},
            {new:true}
            )
        return modify

    }catch(e){
        throw e
    }
}
const deleteBlog = async(author,id)=>{
    try{
        const deleted =BlogPost.findByIdAndDelete({author:author,_id:id})
        return deleted
    }catch(e){
        throw e

    }

}
module.exports = {createBlog,getBlogs,updateBlog,deleteBlog}