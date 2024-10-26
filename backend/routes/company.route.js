import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { Companyregister, getCompany, getCompanyById, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/companyregister").post(isAuthenticated,Companyregister)

router.route("/getcompany").get(isAuthenticated,getCompany)

router.route("/getcompanybyid/:id").get(isAuthenticated,getCompanyById)

router.route("/updatecompany/:id").put(isAuthenticated,updateCompany);

export default router