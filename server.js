let express = require('express');
let cors = require('cors');
var bodyParser = require('body-parser');
let router = express.Router()
require('dotenv').config()
let app = express()

app.use([cors(), bodyParser.json({ limit: '50mb' }), bodyParser.urlencoded({ limit: '50mb', extended: true })])

app.use('', require('./routes/uniswap'))

app.listen(8000,() => {
    console.log('magic happens at 8000')
})