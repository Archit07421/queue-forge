const { Worker } = require("bullmq");

const emailWorker = new Worker("email-queue",

    async (job) => {
        console.log("processing job", job.name);
        console.log("sending to ", job.data.to);
        console.log("subject: ", job.data.subject);
        console.log("body: ", job.data.body);


        return {
            success: true
        };
    }

    ,
    {
        connection: {
            host: "127.0.0.1",
            port: 6379
        }
    }

);

emailWorker.on("failed", (job, err) => {
    console.log(`Job ${job.id} failed`);
    console.log(err.message);
});

emailWorker.on("completed", (job) => {
    console.log(`Job ${job.id} completed successfully`);
});