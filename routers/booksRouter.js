const express=require('express')
const Book=require('./../models/bookModel')

const router=new express.Router()

router.post('/addBook',async(req,res)=>{
    const book=new Book(req.body)

    try{
        await book.save()
        res.status(200).send(book)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/getBook',async(req,res)=>{
    const bookId=req.query.bookId
    try{
        const book=await Book.findById(bookId)
        res.status(200).send(book)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/getBuyBooks',async(req,res)=>{
    const userId=req.query.userId
    try{
        const books=await Book.find({userId:{$ne:userId}})
        res.status(200).send(books)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/getMyListings',async(req,res)=>{
    try{
        const userId=req.query.userId
        const books=await Book.find({userId:userId})
        res.status(200).send(books)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/deleteBook',async(req,res)=>{
    const bookId=req.query.objectId
    try{
        const deletedBook=await Book.findByIdAndDelete(bookId)
        res.status(200).send(deletedBook)
    }catch(e){
        res.status(400).send(e)
    }    
})

module.exports=router