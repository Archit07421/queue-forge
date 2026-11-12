
const express = require("express");

const app = express();

const jobRoutes = require("./routes/job.route");

// Middleware to read JSON data
app.use(express.json());

// Job routes
app.use("/api/jobs", jobRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
