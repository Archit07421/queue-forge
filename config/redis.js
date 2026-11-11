require("dotenv").config();

const Redis = require("ioredis");

const redis = new Redis({
    host: "127.0.0.1",
    post: 6379
});

redis.on("connect", () => {
    console.log("redis started");
});

redis.on("error", (err) => {
    console.log(err);
});

module.exports = redis;
