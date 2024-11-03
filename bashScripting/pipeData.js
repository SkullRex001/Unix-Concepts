const {stdin , stdout , stderr} = require("node:process");
const fs = require("node:fs");


const writeStream = fs.createWriteStream("./output.txt");



stdin.pipe(writeStream);


stdout.end("This is the data emitted from node js process \n");


stderr.end("This is the data from stderr")