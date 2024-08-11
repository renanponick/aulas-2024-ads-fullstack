const express = require("express");
const cors = require("cors");

const UserRouter = require("./routes/user");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (_, res) => {
  res.status(200).json({ message: "OK" });
});

app.use("/api/v1/user", UserRouter);

if (!process.env.TEST) {
  app.listen(3000, (_) => {
    console.log("Server running on port 3000");
  });
}

module.exports = app;
