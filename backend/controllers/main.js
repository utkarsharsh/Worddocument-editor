import express from 'express'
import axios from 'axios'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import user from '../models/user.js'
import document from '../models/document.js'
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
    const {filename,discription}=req.body;
    console.log(req.file);
    mammoth.convertToHtml({path: req.file.path})
    .then(async function(result){
        var html = result.value; 
        let doc=new document({filename,discription,doc:html})
      await doc.save();
    })
    .catch(function(error) {
        console.error(error);
        res.send(error);
    });
    res.send("done");
}

export const getfile=async(req,res,next)=>{
   
const all=await document.find();
res.send(all);
}

export const search=async ( req,res,next)=>{
    const {search}=req.body;
    console.log(search);
    let value=await document.findOne({filename:search});
    console.log(value);
    res.send(value);
}
export const update=async ( req,res,next)=>{
    const {filename,doc}=req.body;
    await document.findOneAndUpdate({filename},{doc});
    res.send("done");
}
