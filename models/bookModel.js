const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    name:{
        type:String
    },
    contactNo:{
        type:String
    },
    address:{
        type:String
    },
    title:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    }
})

const Book=mongoose.model('Book',bookSchema)

module.exports=Book