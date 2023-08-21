const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const router = express.Router();
const compression = require('compression');



// app.use(secure);
app.disable('etag');  //this for a change of StatusCode 304 to 200 OK
app.use(compression());


app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/index.html'));
});

const PORT = process.env.PORT || 8443;
app.use('/', router);

app.listen(PORT, function(err) {
	if (err) console.log(err);
console.log("Server is listening on PORT", PORT);
});