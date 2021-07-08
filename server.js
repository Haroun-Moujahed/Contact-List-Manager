// importing dependecies & functions
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
require("dotenv").config();
// 4- middlewares
app.use(express.json());

// 1- creating the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server is running on port: ${PORT}`);
});

// 2- connecting to database
connectDB();

// 3- connecting the routes (CRUD)
app.use("/api/contacts/", require("./routes/contact"));
