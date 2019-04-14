const express = require("express");
const app = express();

let port = process.env.PORT || 5000;

app.listen(port, () => console.log("Backend started on port " + port));
