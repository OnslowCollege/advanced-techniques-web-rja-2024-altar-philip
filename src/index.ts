var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter your name: ", function(name: String) {
    console.log("Hello, %s!", name)
    rl.close()
})