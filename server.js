const express = require('express');
const app = express();
const url = require('url');
const port = 8080;
const parser = require('./parse');
const genHTML = require('./genHTML');
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var url1 = '../../../../Users/BaronJack/AppData/Local/PokerStars/HandHistory/nicholasj25/';
var url2 = './history/';

app.get('/', (req, res) => {
	var queryString = url.parse(req.url).query;
	parser(url2, function(history){
		history = genHTML(history);
		res.send(history);
	});
});

app.listen(port, () => console.log(`poker stars app listening on port ${port}!`));