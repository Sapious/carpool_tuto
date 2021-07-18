//import high level packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//database connection
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/carpool_tuto");

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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes middleware
app.get("/", (req, res) => {
  return res.json({ msg: "hello world" });
});
app.use("/auth", authRoutes);
app.use("/journeys", journeyRoutes);
app.use("/journey_demands", journeyDemandRoutes);
//server listening
const port = 8000;
app.listen(port, () => {
  console.log("server yemchi jaw mezyan");
});
