var http = require('http');

var opcoes = {
	hostname: 'localhost',
	port: 80,
	path: '/',
	headers: {
		'Accept' : 'application/json'
	}
}


var buffer_response = [];

http.get('http://localhost', function(res){

	res.on('data', function(pedaco){
		buffer_response.push(pedaco);
	});

	res.on('end', function(){
		var corpo_response = Buffer.concat(buffer_response).toString();
		console.log(corpo_response);
	});

})