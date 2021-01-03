const express=require('express')
const bookRouter=require('./routers/booksRouter')
const userRouter=require('./routers/userRouter')
const imageUpload=require('./routers/image-upload')
require('./databaseConnection/mongoose')

const app=express()
app.use(express.json())

app.use(bookRouter)
app.use(imageUpload)
app.use(userRouter)
const port=process.env.PORT

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log('H2H is running on port '+port)
})