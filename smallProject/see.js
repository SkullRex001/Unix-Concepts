// To whoever who want to build an execuitable like cat;

//When you run a execuitable using ur cli like cat , mkdir, it starts a process;

// Every process has stdin , stdout , stderr to talk to other process;

// When we are staring this process we must start listning to stdnin for any input so we can stream it;


const {stdin , stdout , stderr, exit} = require("node:process");
const fs = require("node:fs/promises");


// on termianl
// Type 1 :- cat fileName

//The file will be read and displayed in console

const readFile = async (fileName)=>{
    try {
        const fileHandler  = await fs.open(fileName);
        readStream = fileHandler.createReadStream();
        readStream.pipe(stdout);
    } catch (error) {
        console.log(error.message);
        exit(1);
    }
}

const fileName = process.argv[2];



if(fileName){
        readFile(fileName);
}

else{
// on termianl
// Type 2 :- cat 

//The default stdin is pointed to console , so what ever you type on console after running this process will be printed on consol
    stdin.pipe(stdout)
}











