const mongoose=require('mongoose');

const locationModel=mongoose.Schema({
    id:Number,
    tlong:Number,
    tlat:Number
});

module.exports=mongoose.model('locations',locationModel);
