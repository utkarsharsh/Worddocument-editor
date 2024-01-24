import express  from 'express'
import {connectDB} from './config/db.js'
import routes from './routes/routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Server } from "socket.io";
import { createServer } from "http";
connectDB()

const app=express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api',routes)

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: true
  });

  io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("Newroom",({room})=>{
    console.log(room);
    socket.join(room);
  }
  )
  socket.on("changes",({doc,room})=>{
    io.to(room).emit("applychange",{doc});
  })
  });

const PORT=process.env.PORT
httpServer.listen(PORT, (err) => {
    console.log(err);
  });