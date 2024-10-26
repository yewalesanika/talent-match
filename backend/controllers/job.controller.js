import {Job} from "../models/job.model.js"

export const postjob = async (req,res)=>{
    try {
        const {title,description,reqiurements,salary,location,jobType,experience,positions,companyId} = req.body;

        const userId = req.id;
        if(!title || !description || !salary || !location || !jobType || !experience || !positions || !companyId)
        {
            return res.status(400).json({
                message:"Some feild is missing",
                success:false
            })
        }

        const job = await Job.create({
            title,
            description,
            reqiurements:reqiurements.split(","),
            salary:Number(salary),
            location,
            jobType,
            experience,
            positions,
            companyId,
            createdBy:userId,
        })

        return res.status(201).json({
            message:"Job created successfully",
            job,
            success:true
        })
    } catch (error) {
        console.log("post Job ",error);
    }
} 

export const getAlljob = async(req,res)=>{
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},
            ]
        }

        const jobs = await Job.find(query).populate({
            path:"companyId"
        }).sort({createdAt:-1}); 

        if(!jobs)
        {
            return res.status(404).json({
                message:"no job found",
                success:false
            })
        }

        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log("get all job ",error)
    }
}

export const getJobByid = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);

        if(!job)
        {
            
            return res.status(404).json({
                message:"no job found",
                success:false
            })
        }

        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log("get job by id",error)
    }
}

export const getAdminJobs = async(req,res)=>{
    try {
        const userId = req.id;

        const jobs = await Job.find({createdBy:userId});
        if(!jobs)
            {
                return res.status(404).json({
                    message:"no job found",
                    success:false
                })
            }
            return res.status(200).json({
                jobs,
                success:true
            })

    } catch (error) {
        console.log("get admin job ",error)
    }
}