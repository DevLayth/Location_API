const express=require('express');
const router=myRouter=require('./routes/locations');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const socketio=require('socket.io');
const http=require('http');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

//Allow access middle were
app.use(cors());


//bodyParser middle were
app.use(bodyParser.json());


//Routes middle were
app.use('/locations',myRouter);

mongoose.connect('mongodb+srv://laythhikmat20:MKMnA30cIsBWMtzT@devlayth.bmzd9p5.mongodb.net/uodDB?retryWrites=true&w=majority');

const db = mongoose.connection;


db.once('open', () => {
  console.log('Connected to the MongoDB database');
server.listen(process.env.PORT||8080,()=>{
  
    console.log('server is running on port '+process.env.PORT);
});
});

x


