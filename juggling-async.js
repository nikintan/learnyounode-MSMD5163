var http = require('http');
const bl = require('bl');
var results = []
var count = 0

function httpGet (index) {
	http.get(process.argv[2 + index], function(res){
		res.pipe(bl(function (err, data){
		if (err) {
			return console.error(err)
		}
			results[index] = data.toString()
		count++

		if (count == 3) 
			for (i = 0; i < 3; i++) {
			console.log(results[i])
		}
	}))
})
}

for (i = 0; i < 3; i++){
	httpGet(i)
}