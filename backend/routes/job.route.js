import express from "express";
import { getAdminJobs, getAlljob, getJobByid, postjob } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,postjob)

router.route("/alljob").get(isAuthenticated,getAlljob)

router.route("/adminjob").get(isAuthenticated,getAdminJobs)

router.route("/get/:id").get(isAuthenticated,getJobByid);

export default router

