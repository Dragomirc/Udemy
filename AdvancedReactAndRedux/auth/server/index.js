// Main starting point
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");
const app = express();

//App Setup - get express working
app.use(morgan("combined")); // used for debuging to console.log incoming requests
app.use(cors());
app.use(bodyParser.json({ type: "*/*" })); // parse all incoming requests as they were json
router(app);
//Server Setup - get express talking to the outside world
const port = process.env.PORT || 3090;
const server = http.createServer(app);

const MONGO_URI =
  "mongodb://dragomir89:dragomir89@ds143932.mlab.com:43932/advancedreact";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance"))
  .on("error", error => console.log("Error connecting to MongoLab:", error));
server.listen(port, () => console.log(`Server listening on ${port}`));
