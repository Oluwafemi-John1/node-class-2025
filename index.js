const express = require('express')
// const app = express()

const app = require('express')()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const Users = require('./models/userModel')
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

const cities = [
    {
        name: "Lagos",
        population: "14.8 million",
        country: "Nigeria",
        landmass: "1,171 km²",
        landmark: "Lekki Conservation Centre",
        picture: "https://cms.forbesafrica.com/wp-content/uploads/2021/12/Forbes-Lagos-State-Supplement-Cover-Image-scaled.jpg"
    },
    {
        name: "Cairo",
        population: "9.5 million",
        country: "Egypt",
        landmass: "606 km²",
        landmark: "Pyramids of Giza",
        picture: "https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg"
    },
    {
        name: "Kinshasa",
        population: "14.3 million",
        country: "Democratic Republic of the Congo",
        landmass: "9,965 km²",
        landmark: "Lola ya Bonobo",
        picture: "https://cdn.britannica.com/94/196694-050-7C9D009B/Boulevard-du-30-Juin-street-Kinshasa-Democratic.jpg"
    },
    {
        name: "Johannesburg",
        population: "5.6 million",
        country: "South Africa",
        landmass: "1,645 km²",
        landmark: "Apartheid Museum",
        picture: "https://lagostojozi.com/wp-content/uploads/2019/01/johannesburg-408643_1280.jpg"
    },
    {
        name: "Nairobi",
        population: "4.4 million",
        country: "Kenya",
        landmass: "696 km²",
        landmark: "Nairobi National Park",
        picture: "https://www.micato.com/wp-content/uploads/2018/09/Nairobi_Skyline-1110x700.jpg"
    },
    {
        name: "Addis Ababa",
        population: "3.4 million",
        country: "Ethiopia",
        landmass: "527 km²",
        landmark: "Holy Trinity Cathedral",
        picture: "https://in-addis.com/wp-content/uploads/2024/11/bole.jpeg"
    },
    {
        name: "Casablanca",
        population: "3.7 million",
        country: "Morocco",
        landmass: "220 km²",
        landmark: "Hassan II Mosque",
        picture: "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/city-panorama.-casablanca-morocco.-africa-marianna-ianovska.jpg?itok=h4FjZSIp"
    },
    {
        name: "Accra",
        population: "2.3 million",
        country: "Ghana",
        landmass: "225 km²",
        landmark: "Kwame Nkrumah Mausoleum",
        picture: "accra.jpg"
    },
    {
        name: "Kampala",
        population: "1.7 million",
        country: "Uganda",
        landmass: "189 km²",
        landmark: "Kasubi Tombs",
        picture: "kampala.jpg"
    },
    {
        name: "Dakar",
        population: "1.1 million",
        country: "Senegal",
        landmass: "83 km²",
        landmark: "African Renaissance Monument",
        picture: "dakar.jpg"
    },
    {
        name: "Abidjan",
        population: "4.7 million",
        country: "Ivory Coast",
        landmass: "2,119 km²",
        landmark: "St. Paul's Cathedral",
        picture: "abidjan.jpg"
    },
    {
        name: "Algiers",
        population: "3.9 million",
        country: "Algeria",
        landmass: "363 km²",
        landmark: "Martyrs' Memorial",
        picture: "algiers.jpg"
    },
    {
        name: "Luanda",
        population: "2.5 million",
        country: "Angola",
        landmass: "113 km²",
        landmark: "Fortress of São Miguel",
        picture: "luanda.jpg"
    },
    {
        name: "Dar es Salaam",
        population: "4.4 million",
        country: "Tanzania",
        landmass: "1,393 km²",
        landmark: "National Museum of Tanzania",
        picture: "dar_es_salaam.jpg"
    },
    {
        name: "Maputo",
        population: "1.1 million",
        country: "Mozambique",
        landmass: "347 km²",
        landmark: "Maputo Fortress",
        picture: "maputo.jpg"
    },
    {
        name: "Tunis",
        population: "1.1 million",
        country: "Tunisia",
        landmass: "212 km²",
        landmark: "Medina of Tunis",
        picture: "tunis.jpg"
    },
    {
        name: "Harare",
        population: "1.5 million",
        country: "Zimbabwe",
        landmass: "960 km²",
        landmark: "Mbare Market",
        picture: "harare.jpg"
    },
    {
        name: "Khartoum",
        population: "5.2 million",
        country: "Sudan",
        landmass: "1,010 km²",
        landmark: "Nile Street",
        picture: "khartoum.jpg"
    },
    {
        name: "Tripoli",
        population: "1.1 million",
        country: "Libya",
        landmass: "400 km²",
        landmark: "Red Castle Museum",
        picture: "tripoli.jpg"
    },
    {
        name: "Yaoundé",
        population: "2.8 million",
        country: "Cameroon",
        landmass: "180 km²",
        landmark: "National Museum of Yaoundé",
        picture: "yaounde.jpg"
    }
];



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


app.get('/mail', (req, res) => {
    // res.send('I wanna send mail')
    const transporter = nodeMailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER_G,
            pass: process.env.PASS_G
        }
    })

    const mailOptions = {
        from: 'YOURSELF 👻 "<oyeniranoluwafemi36@gmail.com>"',
        to: 'devfemi3@gmail.com',
        subject: 'Debug complete',
        text: ' A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.',
    }
    transporter.sendMail(mailOptions)
        .then((result) => {
            res.status(201).json({message: 'success'})
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})