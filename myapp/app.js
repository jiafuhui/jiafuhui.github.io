var express  = require('express');
var app = express();

app.use(express.static('lib'));
// 对网站首页的访问返回 "Hello World!" 字样
app.get("/",function(req,res){
	res.send('hello world');
});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s',host,port);
});
