const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    contactNo:{
        type:String
    },
    wishlist:[{
        item:{
            type:mongoose.Types.ObjectId
        }
    }]
})

const User=mongoose.model('User',userSchema)

module.exports=User