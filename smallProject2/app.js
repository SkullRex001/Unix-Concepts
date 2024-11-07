const {spawn} = require("node:child_process");
const fs = require("node:fs");
const {stdout} = require("node:process");

const readStream = fs.createReadStream("./source.txt");


let path = process.argv[2];

const numberFormatter = spawn("./number_formatter" , ["output.txt"]);



numberFormatter.on("close" , (code)=>{
    if(code==0){
        console.log("This file has been readSuccessfully")
    }
})

readStream.pipe(numberFormatter.stdin)
