const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

    
router.post("/postEmail", async (req, res) =>{
    const Email = req.body;
    const newEmail = new usermodels(Email);
    await newEmail.save();

    res.json(Email);
});

router.post('/sendEmail',(req,res)=> {
    const email = req.body;
});



router.get("/getEmail",(req,res)=>{
    usermodels.find({},(err,result) => {
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });
});

module.exports = router;