require('dotenv').config();

const express = require('express')
    ,bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000;

app.get('/home', (req, res)=> {
    res.send(process.env.MESSAGE)
})

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
})


