const express = require("express");
const config = require("config");
const router = require("./routes/");
const PORT = config.get("port");
const path = require("path");

express()
  .use(express.json())
  .use(express.static("build"))
  .use("/api", router)
  .use((_, res) => {
    res.status(404).sendFile(path.join(__dirname, "../build", "index.html"));
  })
  .listen(PORT, () => console.log(`Server started on :${PORT}`));