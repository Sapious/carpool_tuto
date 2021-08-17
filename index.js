require("dotenv").config()
//import high level packages
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//database connection
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.MONGO_DB_URI);

mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("DB connection failed with -", err);
});
//import routes
const authRoutes = require("./routes/auth.routes");
const journeyRoutes = require("./routes/journey.routes");
const journeyDemandRoutes = require("./routes/journeyDemand.routes");
//middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes middleware
app.get("/", (req, res) => {
  return res.json({ msg: "hello world" });
});
app.use("/api/auth", authRoutes);
app.use("/api/journeys", journeyRoutes);
app.use("/api/journey_demands", journeyDemandRoutes);
app.use(express.static("./build"));
app.use("*", (req, res) => {
  res.sendFile(path.resolve("build", "index.html"));
});
//server listening
const port = 8000;
app.listen(port, () => {
  console.log("server yemchi jaw mezyan");
});
