import express  from 'express'
import {connectDB} from './config/db.js'
import routes from './routes/routes.js'
import bodyParser from 'body-parser'
connectDB()
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use('/api',routes)

const PORT=process.env.PORT
app.listen(PORT,console.log("Server up and running at",PORT))