let express = require('express');
let cors = require('cors');
let router = express.Router()
require('dotenv').config()
let app = express()

app.use(cors())

app.use('', require('./routes/uniswap'))

app.listen(8000,() => {
    console.log('magic happens at 8000')
})