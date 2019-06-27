const express = require("express");
const app = express();
const adminHandlers = require("./routes/admin");
const shopHandlers = require("./routes/shop");
app.use(express.urlencoded({ extended: false }));

app.use(adminHandlers);
app.use(shopHandlers);

app.listen(3000);
