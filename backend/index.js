const express = require("express")
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
const { DataBase } = require("./db")
const userrouter = require("./Route/user.route")

app.use("/user", userrouter)


app.listen(port, () => {
    try {
        DataBase()
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.error(error)
    }

})


