const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const VectorSchema=new Schema({
    filename:{
        type:String
    },
    originalname: {
        type:String
    },
    url:{
        type:String,
    },
    created: { 
        type: Date, 
        default: Date.now()
    },
    order:{
        type:Schema.Types.ObjectId,
        ref:'order'
    },
    designer:{
        type:Schema.Types.ObjectId,
        ref:'designer'
    }
});

const Vector=mongoose.model('vector',VectorSchema);

module.exports=Vector;
