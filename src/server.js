const express = require("express");
const cors = require("cors");

const video_route = require("./routes/video_route");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.status(201).send("Hello World");
});

app.use("/api/v1", video_route);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
