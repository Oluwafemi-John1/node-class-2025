// const express = require('express')
// const app = express()

const app = require('express')()
const port = 5454




app.listen(port, ()=>{
    console.log(`server started at port: ${port}`);
})