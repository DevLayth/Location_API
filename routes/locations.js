const express=require('express');
const router=express.Router();

const Location=require('../modules/locations');


router.get('/',async (req,res)=>{
  try{const loc=await  Location.find();

  res.json(loc);
}catch(error){
  console.log(error);
}
});

router.delete('/:id',async (req,res)=>{
    try{const loc=await  Location.deleteOne({"id":req.params.id});
  
    res.json(loc);
  }catch(error){
    console.log(error);
  }
  });
 router.patch('/:id',async (req,res)=>{
    try{const loc=await  Location.updateOne({"id":req.params.id},{"tlong":req.body.tlong,"tlat":req.body.tlat});
  
    res.json(loc);
  }catch(error){
    console.log(error);
  }
  });


router.post('/',(req,res)=>{
  const location=new Location({
    id:req.body.id,
    tlong:req.body.tlong,
    tlat:req.body.tlat
  })
    location.save().then((data)=>{
        res.json({"message":"Locaton add successfully",
                  "data":data
                });
    });
});


module.exports=router;

