const express = require('express')
const { connection } = require('./config/db')
require('dotenv').config()

const PORT = process.env.PORT || 4500
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("working here find.")
})

app.listen(PORT, async () => {
    try {
        await connection
        console.log(`server running on port ${PORT}`);
    } catch (error) {
        
    }
})