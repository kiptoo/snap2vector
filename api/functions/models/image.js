const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const ImageSchema=new Schema({
    filename:{
        type:String
    },
    originalname: {
        type:String
    },
    url:{
        type:String,
    },
    created:{ 
        type: Date, 
        default: Date.now() 
    },
    user:{
        type:String
    }
    // user:{
    //     type:Schema.Types.ObjectId,
    //     ref:'user'
    // }
},{ toJSON: { virtuals: true } });

ImageSchema.virtual('user_data', {
    ref: 'user', // The model to use
    localField: 'user', // Find user where `localField`
    foreignField: '_id', // is equal to `foreignField`
    justOne: true
  });
const Image=mongoose.model('image',ImageSchema);

module.exports=Image;
