 var fs=require('fs')
 var output=undefined

function getOutput (callback) {
 fs.readFile(process.argv[2], 'utf8', function doneReading(err,contents){
 	output=contents.split('\n').length-1
 	callback()
 })
}

function logOutput() {
  console.log(output)
}

getOutput(logOutput)