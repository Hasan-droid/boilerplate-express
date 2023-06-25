let express = require("express");
let app = express();
require("dotenv").config();
console.log("hello world");

// app.get("/", (req, res) => {
//   res.send("Response String");
// });
app.use(express.static(__dirname + "/public/style.css"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    return res.json({ message: "HELLO JSON" });
  }
  res.json({ message: "Hello json" });
});
module.exports = app;
