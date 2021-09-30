const mongoose=require('mongoose');
const addcardTemplate=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    cardnumber:{
        type:Number,
        required:true,
        unique:true
    },
    month:{
        type:Number,
        required:true,
        unique:true
    },
    year:{
        type:Number,
        required:true,
        unique:true
    },
    cvv:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('addTable',addcardTemplate)