const express = require ("express");
const path = require("path");
const fs = require("fs");
const htmlRoutes = require("./routes/html");
const apiRoutes = require("./routes/api");
const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);


app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));