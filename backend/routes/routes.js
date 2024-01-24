import express from 'express'
const router=express.Router()
import {upload} from '../config/multer.js'
import {login,SignUp,file,getfile, search, update} from '../controllers/main.js'
import { get } from 'mongoose'

router.post('/login',login)
router.post('/signup',SignUp);
router.post('/upload',upload.single("doc"),file);
router.get('/getdocument',getfile);
router.post('/search',search);
router.post('/update',update)
export default router
