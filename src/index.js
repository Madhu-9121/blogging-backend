require('dotenv').config({path:"./src/.env"})
const cors = require ('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const blogRoutes = require('./routes/blogRoutes')
const commentRoutes = require('./routes/commentRoutes')
mongoose    
    .connect(process.env.DB_URI)
    .then(()=>console.log("connected to DB"))
    .catch((e)=>console.error(e))
app.use(express.json())
app.use(cors())
app.use('/api/users',authRoutes)
app.use("/api/blogs",blogRoutes)
app.use("/api/blogs",commentRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
})