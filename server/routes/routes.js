const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const signupTemplateCopy=require('../models/addCardModel')

router.post('/addcard',async(request,response)=>{
    const saltCardNumber=await bcrypt.genSalt(10)
    const secureCardNumber=await bcrypt.hash(request.body.password,saltCardNumber)



    const signedUpUser=signupTemplateCopy({
        fullname:request.body.fullname,
        cardnumber:secureCardNumber,
        month:request.body.month,
        year:request.body.year,
        cvv:request.body.cvv
    })
    signedUpUser.save().then(data=>{
        response.json(data)
    }).
    catch(error=>{
        response.json(error)
    })
})


module.exports=router