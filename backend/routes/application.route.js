import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applicationStatus, applyjob, getApplicantInfo, getAppliedjobs } from "../controllers/application.controller.js";

const router = express.Router();

router.route("/applyjob/:id").get(isAuthenticated,applyjob)

router.route("/getappliedjob").get(isAuthenticated,getAppliedjobs)

router.route("/:id/getapplicantinfo").get(isAuthenticated,getApplicantInfo)

router.route("/status/:id/updatestatus").post(isAuthenticated,applicationStatus);

export default router