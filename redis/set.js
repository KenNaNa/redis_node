var redis = require('redis');
var client = redis.createClient('6379','localhost');

client.set('name','Ken');

client.get('name',function(err,val){
	if(err){
		throw new Error(err);
	}
	console.log(val);
})