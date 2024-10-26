import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    reqiurements :[{
        type : String,
    }],
    salary : {
        type : Number,
        required : true
    },
    location :{
        type : String,
        required : true
    },
    jobType :{
        type : String,
        required : true
    },
    experience :{
        type : Number,
        required : true
    },
    positions :{
        type : Number,
        required : true
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    application:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Application",
    }]
},{timestamps:true})

export const Job = mongoose.model("Job",jobSchema);