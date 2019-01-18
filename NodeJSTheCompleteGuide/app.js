const http = require("http");
const requestHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { ContentType: "text/html" });
    res.write(
      "<html><head><title>Hello to the Node Server</title></head><body><h1>Have a nice weekend</h1><form action='/create-user' method='POST'><input type='text' name='username'/><input type='submit'/></form><body></html>"
    );
    return res.end();
  } else if (url === "/users") {
    res.setHeader("ContentType", "text/html");
    res.write(
      "<html><head><title>Hello to the Node Server</title></head><body><h1>Have a nice weekend</h1><ul><li>Bill Gates</li><li>Steve Jobs</li></ul><body></html>"
    );
    return res.end();
  } else if (url === "/create-user") {
    const body = [];

    req.on("data", chunk => body.push(chunk));
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log("Hello", message);
      res.writeHead(302, { Location: "/" });
      return res.end();
    });
  }
};
const server = http.createServer(requestHandler);
server.listen(3000, () => console.log("Server listening on port 3000"));
