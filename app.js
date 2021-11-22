const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const globalRouter = require("./router/globalRouter");

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`🐶🐾http://localhost:${PORT} CR_9 SERVER START`);
});