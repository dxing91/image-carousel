var express = require('express');
var app = express();

app.use(express.static('dist'));
app.use('/src', express.static('src'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
})

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Listening on port' + port);
});
