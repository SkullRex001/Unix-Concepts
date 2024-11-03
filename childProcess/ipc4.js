const {spawn} = require("node:child_process");
const fs = require("node:fs");

const subprocess = spawn("./playground")



const writeSteam = fs.createWriteStream("./output.txt");



//this will be the parent process of playground and stdout will pipr the stdout data of c++ program to the consol of parent process, as written in the code.


subprocess.stdout.pipe(writeSteam);


