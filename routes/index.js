const express = require('express')
const router = express.Router()
    //using router fucntion (router = controller in MVC)

router.get('/', (req, res) => {
    res.render('index')
}) //rendering the index.ejs view here
    // in express res.render automatically looks for view fiel in views directory
    // because in server.js we set app.set('views', __dirname + '/views')
    

module.exports = router //have to export to be able to use
