const express = require("express")
const mongoose = require('mongoose');
const app = express()
const userRouter = require("./routes/user")
const dotenv = require('dotenv');
dotenv.config();

const PORT=process.env.PORT
const URI=process.env.URI


mongoose.connect(URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Your code to interact with MongoDB goes here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });



//ROUTES
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server started at ${PORT}`))