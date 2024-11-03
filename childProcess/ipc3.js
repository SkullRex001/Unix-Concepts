const {spawn} = require("node:child_process");
const fs = require("node:fs");

const subprocess = spawn("./playground")


//this will be the parent process of playground and stdout will print the stdout data of c++ program to the consol of parent process, as written in the code.



const writeSteam = fs.createWriteStream("./output.txt");


subprocess.stdout.on("data" , (data)=>{

    console.log(data.toString("utf-8"));
})





