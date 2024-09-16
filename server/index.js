const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

mongoose.set("strictQuery", false);

dotenv.config();

mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

const app = express();
app.use(express.json());
app.use(cors());

const routes = require("./routes/routes");

app.use("/", routes);

app.listen(4000, () => console.log("Server BackEnd 4000 UP"));
