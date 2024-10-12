if (process.env.NODE_ENV !== 'production') { // check not in prod as we only want to load in this env variable in dev environemnt, 
    require('dotenv').config() //loads all vars from .env file and imports into process.env variable
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
    //points to relative path

app.set('view engine', 'ejs')
    //set view engine
app.set('views', __dirname + '/views') 
    // where views are coming from
    //so when you call res.render('index') it's set up to look in /views folder
app.set('layout', 'layouts/layout' ) 
    // hookup express layouts, all layout files in this folder
    //header and footer here so dont' have to dublicate things
app.use(expressLayouts)
    //we wnat to use expressLayouts
app.use(express.static('public')) 
    //Where are do server rendered views exist? in 'public' folder


const mongoose = require('mongoose')
    //brining in the library mongoose to talk with mongo
mongoose.connect(process.env.DATABASE_URL, 
    //process.env - users environment variable, DATABASE_URL - is our env var
)//{useNewURLParser: true })
const db = mongoose.connection
    //Log if are are aren't connected to database
db.on('error', error => console.error(error))
    //.on and error - prints error upon connecting to database
db.once('open', () => console.log('Connected to Mongoose'))
    //.once an open (only runs 1 time)- and logs that we have connected

app.use('/', indexRouter) //tells where it is and what to use (indexRouter var)

app.listen(process.env.PORT || 3000) 
    //pulls from env variable
    // || sets default

// routes are the same as controllers in MVC
