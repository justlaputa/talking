var express = require('express')
  , fs = require('fs')

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/reveal.js'))

app.get('/', function (req, res) {
    res.render('clm-js')
})

app.listen(process.env.PORT || 3000)
