const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const signale = require('signale');

signale.config({
  displayLabel: false
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  signale.success(`server running on port - ${PORT}`);
});
