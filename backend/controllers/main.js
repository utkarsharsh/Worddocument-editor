import express from 'express'
import axios from 'axios'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import user from '../models/user.js'
import jwt from 'jsonwebtoken'
import mammoth from 'mammoth'
const app=express();

export const SignUp=async (req,res,next)=>{
    if((await user.find({username:req.body.username})).length==0){
       const {username,password}=req.body;
       const use=new user({username,password});
       await use.save();
       const token=jwt.sign({username},process.env.SECRETKEY);
       res.send({status:"Yes",token});

    }
    else {
        res.send("User already exits");
    }


}


export const login=async (req,res,next)=>{

    if((await user.find({username:req.body.name})).length==0){
       res.send("No user found");
    }
    else {
        let password= await user.findOne({username:req.body.name});
        if(password.password==req.body.password){
            const token=jwt.sign({username},process.env.SECRETKEY);
            res.send({status:"Yes",token});

        }
        else{
            res.send("Password did not match");
        }
       
    }

   
}

export const file=async(req,res,next)=>{
    console.log(req.file);
    mammoth.convertToHtml({path: req.file.path})
    .then(function(result){
        var html = result.value; // The generated HTML
        console.log(html);
        var messages = result.messages; // Any messages, such as warnings during conversion
        console.log(messages);
    })
    .catch(function(error) {
        console.error(error);
    });
    res.send("done");
}
