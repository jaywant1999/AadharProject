const express = require("express");
const bodyparser = require("body-parser");
const router = require("./Router");
const cors = require("cors");

const server = express();

server.use(cors());

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: false }));

server.use(router);

server.listen(1234, (err) => {
  if (err) console.log(err);
  else console.log("server is running on http://127.0.0.1:1234");
});
