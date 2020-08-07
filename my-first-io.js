const fs = require('fs');
var str = fs.readFileSync(process.argv[2]);
var output = str.toString().split('\n').length-1
console.log(output);