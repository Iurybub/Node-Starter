const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(userRoutes);

app.listen(port);
