const express = require("express");

const dbconnect = require("./bdconfig");

dbconnect();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/db", require("./dbrouter"));

app.listen(4000, () => {
  console.log(`Server is running on `);
});
