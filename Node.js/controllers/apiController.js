const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();
module.exports = function(app) {
  app.get("/api/person/:id", function(req, res) {
    // get the data from the database
    res.json({ firstnmae: "John", lastname: "Doe" });
  });
  app.post("/api/person", jsonParser, function(req, res) {
    //save to  the database
  });
  app.delete("/api/person/:id", function(req, res) {
    //delete from the database
  });
};
