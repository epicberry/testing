var express = require('express')
var app = express()
var count = 0
app.get('/', function (req, res) {
  res.send('Hello Param!. This was opened '+ ++count + ' times.')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
