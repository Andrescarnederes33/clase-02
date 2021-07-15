require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

/*Initialization server*/
const app = express();

/*Settings*/
app.set("port", process.env.PORT || 4000);

/*Middlewares*/
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.static(path.join(__dirname, "public")));

/*Global variables*/

/*Routes*/
app.get("/", (req, res) => {
  res.json({
    status: 201
  });
});

app.use("/api/tests", require("./routes/test.routes"));


//= catch 404 and forward to error handler
app.use(function (req, res, next) {
  next();
});

/*Static*/

/*Started Server*/
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
