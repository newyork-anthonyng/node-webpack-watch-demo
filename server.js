import express from "express";
import headPartial from "./head.html";
import footPartial from "./foot.html";
const app = express();

app.get("/", (req, res) => {
  res.write(headPartial);
  res.write("<marquee>Hello World</marquee>");
  res.write(footPartial);
  res.end();
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
