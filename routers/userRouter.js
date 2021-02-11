const { response } = require('express')
const express=require('express')
const User=require('./../models/userModel')

const router=new express.Router()

router.post('/newUser',async(req,res)=>{
    const user=new User(req.body)
    try{
        await user.save()
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/currentUser',async(req,res)=>{
    const userId=req.query.userId
    try{
        const user=await User.find({userId:userId})
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/addItemToWishlist',async(req,res)=>{
    const bookId=req.body.bookId
    const userId=req.body.userId
    try{
        const user=await User.findOne({userId:userId})
        const wishlist=user.wishlist
        let response=null
        wishlist.forEach((book)=>{
            if(book.item==bookId){
                response="Already Present in Wishlist"
            }
        })

        if(response==="Already Present in Wishlist"){

        }else{
            wishlist.push({'item':bookId})
            await user.save()
            response="Item succesfully added to wishlist"
        }
        
        res.status(200).send(response)

    }catch(e){
        console.log(e)
    }
})

router.post('/deleteItemWishlist',async(req,res)=>{
    console.log("deleteItemWishlist")
    const userId=req.body.userId
    const objectId=req.body.objectId
    console.log(objectId)
    try{
        const user=await User.findOne({userId:userId})
        const wishlistArr=user.wishlist
        console.log(wishlistArr)
        const index=wishlistArr.findIndex((book)=>{
            return book.item.toString()==objectId.toString()
        })
        console.log(index)
        wishlistArr.splice(index,1)
        user.save()
        res.status(200).send("Removed item succesfully")

    }catch(e){
        res.status(400).send(e)
    }

})

router.get('/getWishlist',async(req,res)=>{
    const userId=req.query.userId
    try{
        const user=await User.findOne({userId:userId}).populate('wishlist.item').exec()
        res.send(user)
    }catch(e){
        res.send(e)
    }
})



module.exports=router