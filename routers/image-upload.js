const express=require('express')
const upload=require('./../services/file-upload')

const router=new express.Router()

const uploadSingle=upload.single('image')

router.post('/h2h-image-upload',(req,res)=>{
    uploadSingle(req,res,function(err){
        if(err){
            console.log(err)
        }
        return res.json({'image_url':req.file.location})
    })
})

module.exports=router