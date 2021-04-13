const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(userRoutes);

app.listen(port);
