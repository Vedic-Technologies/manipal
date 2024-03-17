const express = require("express")
const app = express()
const { logReqRes } = require("./middlewares")
const userRouter = require("./routes/user")
const { connectMongoDb } = require("./connection.js")
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT
const URI = process.env.URI

// Connection
connectMongoDb(URI)

// MIDDLEWARE - plugin
app.use(express.json())
app.use(logReqRes("log.txt"))

//ROUTES
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server started at ${PORT}`))