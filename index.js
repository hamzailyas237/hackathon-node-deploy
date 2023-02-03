
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/Router,')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.URI)
    .then(res => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log('Error in MongoDB Connection');
    })

app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`server is running at https://localhost:${PORT}`);
})