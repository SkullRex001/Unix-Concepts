const { Console } = require("node:console");
const fs = require("node:fs");

const output = fs.createWriteStream("./output.txt");

const errorOutput = fs.createWriteStream("./output.txt");


const logger = new Console({stdout : output , stderr : errorOutput});

logger.log("Hello my name is aditya vikram singh");
