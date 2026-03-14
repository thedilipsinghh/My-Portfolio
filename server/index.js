require("dotenv").config({})
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { FRONTEND_URL } = require("./utils/config.js")

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())

app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? 'https://bca-ly-project-jwt-client.vercel.app'
        : 'http://localhost:3000',
    credentials: true
}));
app.use("/api/admin", require("./route/admin.routes.js"))
app.use("/api/auth", require("./route/auth.routes.js"))
app.use("/api/email", require("./route/email.routes.js"))
mongoose.connection.once("open", () => {
    console.log("db conneted")
})

app.listen(process.env.PORT, () => {
    console.log("Server is Runnig")
    console.log("mode", `${process.env.NODE_ENV}`)
    console.log("Port", `${process.env.PORT}`)
})
