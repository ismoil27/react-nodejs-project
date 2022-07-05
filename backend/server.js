const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// const houseRouter = require("./routes/houseRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/", require("./routes/houseRoutes"));

app.listen(3002, () => console.log(`Server running on port 3002...`));
