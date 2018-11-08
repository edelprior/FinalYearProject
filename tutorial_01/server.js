const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//Body parser middleware
app.use(bodyParser.json());

// Mongo db uri
// DB configv       g
const db = require("./config/keys").mongoURI;

//connecting to db
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// use routes

app.use("/api/items", items);

const port = process.env.PORT || 3000;

// just so we're aware that it's started
app.listen(port, () => console.log(`Server started on port ${port}`));
