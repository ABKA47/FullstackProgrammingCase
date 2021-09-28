const express= require('express')

const route=express.Router()

const {User} = require("../model/user")

route.get('/users',(req,res)=>{
   User.find().then(user=>{
       res.send(user)
   }).catch(err=>{
       res.status(500).send({message:err.message || "Error Occurred while retriving user information!"})
   })
})
route.get('/users/:id',(req,res)=>{
    const id = req.params.id
    User.findById(id).then(data=>{
        if(!data){
            res.status(404).send({message:"Not found user with id="+id})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.send(500).send({message:"Error retriving user with id"+id})
    })
})

route.post('/add-user',(req,res)=>{
    let user = new User({        
            name:req.body.name,
            surname:req.body.surname,
            username:req.body.username,
            email:req.body.email,
            title:req.body.title,
            role:req.body.role
        })

    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({success:true,userInfo})
    })
})

route.put('/update-user/:id',(req,res)=>{
    const id = req.params.id

    User.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}.Maybe user not found!`})
        }else{
            res.send(data)
        }
    }).catch(err =>{
        res.status(500).send({message:"Error Update user information!"})
    })
})

route.delete('/delete-user/:id',(req,res)=>{
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot delete with ${id}.Maybe id is wrong!`})
        }else{
            res.send({
                message:"User was deleted successfully!"
            })
        }
    }).catch(err=>{
        res.status(500).send({message:"Could not delete User with id ="+id})
    })
})

module.exports = route