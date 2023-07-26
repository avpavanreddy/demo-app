const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const userRoute = require('./routes/userRoute')

const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || 8000, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Running succesfully at ", process.env.PORT)
        }
    });
}).catch((err) => {
    console.log("DB Connection Failed", err)
})

app.use(userRoute)



