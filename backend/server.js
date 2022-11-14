const express = require("express");
const app = express();
const route = require("./routes/index")
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

const db = require("./config/db");
app.use("/api", route);

app.listen(port, () => {
  // perform a database connection when server starts
  db.connect(function (err) {
  });
  console.log(`Server is running on port: ${port}`);
});
