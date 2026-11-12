const emailQueue = require("../queue/email.queue");

async function createJob(req, res) {
    try {
        const { to, subject, body } = req.body;

        const job = await emailQueue.add("welcome-email", {
            to,
            subject,
            body
        });

        res.status(201).json({
            message: "job added successfully",
            jobId: job.id
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to create a job",
            error: err.message
        });
    }
}

async function getJobStatus(req, res) {
    try {

        const jobId = req.params.id;

        const job = await emailQueue.getJob(jobId);
        if (!job) {
            return res.status(404).json({
                message: "job not found"
            });
        }

        const state = await job.getState();

        res.status(200).json({
            jobId: job.id,
            name: job.name,
            data: job.data,
            status: state
        });

    } catch (err) {
        res.status(500).json({
            message: "failed to fetch the status",
            error: err.message
        });
    }



}

module.exports = {
    createJob,
    getJobStatus
}