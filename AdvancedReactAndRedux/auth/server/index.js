// Main starting point
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./router");
const app = express();

//App Setup - get express working
app.use(morgan("combined")); // used for debuging to console.log incoming requests
app.use(bodyParser.json({ type: "*/*" })); // parse all incoming requests as they were json
router(app);
//Server Setup - get express talking to the outside world
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on ${port}`));
