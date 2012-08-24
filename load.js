var http = require('http');
var iterations = 10000;
var concurrentUsers = 20;

http.globalAgent.maxSockets  = concurrentUsers;

for(var i = 0; i < iterations; i++){
	var req = Go(i);
	req.end();
}

console.log("Sent")

function Go(i)
{
	var log = i%100 == 0  || i < 100;
	if (log) var time = process.hrtime();

	var req = http.get('http://localhost:1337/', function(res) {
		if (!res.statusCode == 200){
	  		console.log('STATUS: ' + res.statusCode);	
	  	}
	  	if (log)
	  	{
	  		console.log(i + " : " + (process.hrtime(time)[1] / 1000000));
	  	}
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});
	return req;
}