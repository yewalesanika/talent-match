import {Company} from "../models/company.model.js";

export const Companyregister = async (req, res) => {
    try {
        const {companyname} = req.body;
        if (!companyname) {
            return res.status(400).json({
                message: "Company name is required",
                success: false,
            });
        }

        let company = await Company.findOne({name:companyname});
        if(company)
        {
            return res.status(400).json({
                message:"This company already exists",
                success:false
            })
        }
        company = await Company.create({name:companyname,userId:req.id});

        return res.status(201).json({
            message:"Company successfully registered",
            company,
            success:true,
        })
    } catch (error) { 
        console.log("company register ",error)
    }

};

export const getCompany = async(req,res)=>{
    try {
        const userId = req.id;

        const companies = await Company.find({userId})

        if(!companies)
        {
            return res.status(404).json({
                message:"Companies not found",
                success:false,
            })
        }

        res.status(200).json({
            companies,
            success:true, 
        })
    } catch (error) {
        console.log("Get company ",error);
    }
}

export const getCompanyById = async (req,res)=>{
    try {
        const companyId = req.params.id;

        const company = await Company.findById(companyId);
        if(!company)
        {
            return res.status(404).json({
                message:"Company not found",
                success:false,
            })
        }

        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log("Get company by id ",error)
    }
}

export const updateCompany = async(req,res)=>{
    try {
        const {name,description,website,loaction} = req.body;
        const file = req.file;

        const updateData = {
            name,
            description,
            website,
            loaction
        }

        const company = await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});

        if(!company)
        {
            return res.status(404).json({
                message:"Company not found",
                success:false,
            })
        }

        return res.status(200).json({
            message:"updated successfully",
            success:true,
        })
    } catch (error) {
        console.log("Update company ",error);
    }
}