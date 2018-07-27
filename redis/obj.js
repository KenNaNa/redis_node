var redis = require('redis');
var client = redis.createClient('6379','localhost');

client.set('info',{"name":"Ken","age":20});

client.get('info',function(err,val){
	if(err){
		throw new Error(err);
	}
	console.log(JSON.stringify(val));
})