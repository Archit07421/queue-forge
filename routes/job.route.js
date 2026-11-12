const express = require("express");
const { createJob, getJobStatus } = require("../controller/job.controller.js")
const router = express.Router();


router.post("/", createJob);
router.get("/:id/status", getJobStatus);

module.exports = router;