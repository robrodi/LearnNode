var http = require('http');
var options = {
  host: 'localhost',
  port: 1337,
  path: '/upload',
  method: 'POST'
};
var numUsers = 100000;
for(var i = 0; i < numUsers; i++){
	//console.log(i);
	var req = http.request(options, function(res) {
		if (!res.statusCode == 200){
	  		console.log('STATUS: ' + res.statusCode);	
	  	}
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});
	req.end
	req.end();
}