const { worker } = require("bullmq");

const emaiWorker = new worker("email-queue",

    async (job) => {
        console.log("processing job", job.name);
        console.log("sending to ", job.data.to);
        console.log("subject: ", job.data.subject);
        console.log("body: ", job.data.body);

    }
    ,
    {
        connection: {
            host: "127.0.0.1",
            port: 6379
        }
    }

);