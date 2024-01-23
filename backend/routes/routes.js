import express from 'express'
const router=express.Router()
import {upload} from '../config/multer.js'
import {login,SignUp,file} from '../controllers/main.js'

router.post('/login',login)
router.post('/signup',SignUp);
router.post('/upload',upload.single("doc"),file);

export default router
