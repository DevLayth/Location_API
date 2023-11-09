const express=require('express');
const router=myRouter=require('./routes/locations');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();

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
app.listen(process.env.Port||8080,()=>{
    console.log('server is running on port 8080');
});

  
});


