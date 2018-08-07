const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/person/:id", function(req, res) {
    res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
  });
  app.post("/person", urlencodedParser, function(req, res) {
    res.send("Thank you!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });
  app.post("/personjson", jsonParser, function(req, res) {
    res.send("Thank you for the json data!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });
};
