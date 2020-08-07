for (i = 2, result = 0; i < process.argv.length; i++) {
result += +process.argv[i];
};
console.log(result);