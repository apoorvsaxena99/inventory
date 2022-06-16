const mongoose=require('mongoose');
const connectDB=async()=>{
    try {
        const connection=await mongoose.connect("mongodb+srv://apoorv:india@cluster0.swdfk.mongodb.net/?retryWrites=true&w=majority",{dbName:'inventory'},{
            useNewURLParser : true,
            useUnifiedTopology : true
        });
        console.log("MongoDB Connected Successfully");
        
    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}

module.exports=connectDB;