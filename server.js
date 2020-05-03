const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give the server access to routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
	console.log("Server listening on: http://localhost:" + PORT);
});
