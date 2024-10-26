import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MongoDBURL);
        console.log("mongodb connected successfully");
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB