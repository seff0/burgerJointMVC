const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

// Express middleware
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// route handling
const routes = require("./controllers/burgerController.js");
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
