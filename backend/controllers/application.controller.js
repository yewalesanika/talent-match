import { Application } from "../models/application.model.js";
import {Job} from "../models/job.model.js"

export const applyjob = async(req,res)=>{
    try {
        const userId = req.id;
        const {id:jobId} = req.params;

        if(!jobId){
            return res.status(400).json({
                messgae:"Job id is required",
                success:false
            })
        }

        const exisitingApplication = await Application.findOne({job:jobId,applicant:userId});

        if(exisitingApplication)
        {
            return res.status(400).json({
                messgae:"You have already appiled in this job",
                success:false
            })
        }

        const job = await Job.findById(jobId);

        if(!job)
        {
            return res.status(400).json({
                message:"Such job does not exists",
                success:false,
            })
        }

        const newApplication = await Application.create({
            job:jobId,
            applicant:userId
        })

        job.application.push(newApplication._id);

        await job.save()

        return res.status(200).json({
            message:"Job applied successfully",
            success:true
        })

    } catch (error) {
        console.log("apply job",error)
    }
}

export const getAppliedjobs = async(req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:"job",
            options:{sort:{createdAt:-1}},
            populate:{
                path:'companyId',
                options:{sort:{createdAt:-1}},
            }
        });

        if(!application)
        {
            return res.status(400).json({
                message:"You have not appiled to any job",
                success:false
            })
        }

        return res.status(200).json({
            application,
            success:true,
        })
    } catch (error) {
        console.log("get applioed jobs",error)
    }
}

export const getApplicantInfo = async(req,res)=>{
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate({
            path:"application",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"applicant",

            }
        })

        if(!job)
        {   
            return res.status(400).json({
                message:"no one yet applied",
                success:false,
            })
        }

        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log("get applicants info",error);
    }
}

export const applicationStatus = async(req,res)=>{
    try {
        const {status} = req.body;
        const applicationId = req.params.id

        if(!status)
        {
            return res.status(400).json({
                message:"status is required",
                success:false,
            })
        }

        const application = await Application.findOne({_id:applicationId});

        if(!application)
        {
            return res.status(400).json({
                message:"application not found",
                success:false,
            })
        }

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"status updated succesfully",
            success:true,
        })
    } catch (error) {
        console.log("application status",error)
    }
}