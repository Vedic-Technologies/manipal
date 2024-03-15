const express = require("express")
const { connectMongoDb } = require("./connection.js")

const { logReqRes } = require("./middlewares")
const userRouter = require("./routes/user")

const app = express();
const PORT = 8000;

//Connection
connectMongoDb('mongodb://127.0.0.1:27017/myApp')
.then(()=> console.log("mongodb conneted"))

// MIDDLEWARE - plugin
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes("log.txt"))

//ROUTES
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server started at ${PORT}`))