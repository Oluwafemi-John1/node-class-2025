const express = require('express')
// const app = express()

const app = require('express')()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Users = require('./models/userModel')
const Mailer = require('./controllers/sendMail')
const cities = require('./controllers/cities')
require('ejs')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 5400
const URI = process.env.uri || undefined


mongoose.connect(URI)
    .then(() => {
        console.log('Lift off!, database neural handshake completed');
    })
    .catch((err) => {
        console.log(err);
    })

app.post('/signup', async (req, res) => {
    try {
        const { name, email, age, password } = req.body
        const newUser = new Users({ name, email, age, password })
        await newUser.save()
        res.status(201).json({ message: 'Data added successfully', user: newUser })
    } catch (err) {
        console.log(err);
        res.status(501).json({ error: err.message })
    }
})

app.get('/allusers', () => {
    const data = Users.find()
    console.log(data);
})


app.get('/', (req, res) => {
    // res.send('working')
    // res.sendFile(__dirname+'/public/index.html')
    // res.send(__dirname)
    res.render('index', { title: 'First EJS page', name: 'Oluwakemi', score: 42 })
})

app.get('/signup', (req, res) => {
    res.render('pages/signup')
})

app.get('/signin', (req, res) => {
    res.render('pages/signin')
})

app.get('/dashboard', (req, res) => {
    fetch('https://second-class.vercel.app/api')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            res.render('pages/dashboard', { data })
        })
        .catch(err => console.log(err))
})

app.get('/api', (req, res) => {
    res.send(cities)
})


app.get('/mail', Mailer)

app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})