const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const DesignerSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name field is required"]
    },
    email:{
        type:String,
        required:[true,"email field is required"]
    },
    password:{
    type:String
    },
    source:{
        type:String
    }
});

const Designer=mongoose.model('designer',DesignerSchema);

module.exports=Designer;
