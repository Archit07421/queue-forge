const express = require("express");
const { createJob, getJobStatus, getfailedJobs } = require("../controller/job.controller.js")
const router = express.Router();


router.post("/", createJob);
router.get("/failed", getfailedJobs);
router.get("/:id/status", getJobStatus);


module.exports = router;