const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const taskRoute = require("./routes/tasks");

app.use(express.static("public"));
app.use(express.urlencoded());

app.use("/users", usersRoute);
app.use("/", authRoute);
app.use("/tasks", taskRoute);

app.listen(PORT, console.log(`We are live on port ${PORT}`));
mongoose.connect(
  "mongodb+srv://daniel1:test@rest.oelp9.mongodb.net/REST?retryWrites=true&w=majority",
  console.log("Connect to the database!")
);
