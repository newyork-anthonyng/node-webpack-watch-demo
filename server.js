import express from "express";
import headPartial from "./head.html";
import footPartial from "./foot.html";

import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import path from "path";

const compiler = webpack({
  entry: path.resolve(__dirname, "../src/index.js"),

  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  }
});

const app = express();
app.use(
  middleware(compiler, {})
);

app.get("/", (req, res) => {
  res.write(headPartial);
  res.write("<marquee>Hello World</marquee>");
  res.write(footPartial);
  res.end();
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
