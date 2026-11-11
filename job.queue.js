const emailQueue = require("./queue/email.queue");

async function addJob() {
    const job = await emailQueue.add("welcome-email", {
        to: "architkanchi07@gmail.com",
        subject: "welcome to queue forge",
        body: "my first background job"

    });
    console.log("job addedd successfully");
    console.log("job id", job.id);
};

addJob();