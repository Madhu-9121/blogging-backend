const blogServices = require('../services/blogServices')


const createBlog =async(req,res)=>{
    try{
        const {title,content}  = req.body
        const author = req.user
        const blog= await blogServices.createBlog({author,title,content})
        res.status(201).json(blog)
    }catch(e){
        res.status(500).json({message:e.message})
    }

}
const getBlogs = async(req,res)=>{
    try{
        const author = req.user
        const blogs = await blogServices.getBlogs(author)
        res.status(200).json(blogs)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const updateBlog = async(req,res)=>{
    try{
        const author = req.user
        const data = req.body
        const id = req.params.id
        const updated = await blogServices.updateBlog(author,data,id)
        if(!updated){
            res.status(404).json({message:"Not Found"})
        }
        res.status(200).json(updated)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const deleteBlog = async(req,res)=>{
    try{
        const author = req.user
   
        const id = req.params.id
        const deleted = blogServices.deleteBlog(author,id)
        if(!deleted){
            res.status(404).json({message:"Not Found"})

        }
        res.sendStatus(204)

    }catch(e){
        res.status(500).json({message:e.message})

    }
}

module.exports = {createBlog,getBlogs,updateBlog,deleteBlog}