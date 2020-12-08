const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();

app.use(serveStatic(path.join(__dirname, "dist")));

console.log('Running..')
app.listen(process.env.PORT || 3000);