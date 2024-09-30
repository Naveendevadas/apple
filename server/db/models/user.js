const mongoose =require('mongoose');
const user=new mongoose.Schema({

title:{
    type:String,
    required:true,
},
language:{
    type:String,
    required:true,

},
genere:{
    type:String,
    required:true,
},

})
module.exports=mongoose.model("user",user);
