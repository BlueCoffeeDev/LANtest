var express = require('express')
var app = express()
// declaring the app and npm package.

app.get('/', function (req,res) {
    res.send('aylmao')
})

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});
