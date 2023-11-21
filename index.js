const express = require('express')
const { connection } = require('./config/db')
const { user_router } = require('./routes/user.route')
require('dotenv').config()

const PORT = process.env.PORT || 4500
const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("working here find.")
})

app.use("/user", user_router)
// error handler middleware
app.use(((err, req, res, next) => {
    return res.status(500).json({
        error: true,
        message: err.message
    })
}))

app.listen(PORT, async () => {
    try {
        await connection
        console.log(`server running on port ${PORT}`);
    } catch (error) {
        
    }
})