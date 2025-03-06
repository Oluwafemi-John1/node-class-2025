// const express = require('express')
// const app = express()

const app = require('express')()
require('dotenv').config()
const port = process.env.PORT




app.listen(port, ()=>{
    console.log(`server started at port: ${port}`);
})