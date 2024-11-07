//Using cluster module, parent process can create instances of their own and run them on another core and using various algos they can distribute the traffic

//remember parent uses system call known as fork to do this.

//This system call is not allowed to be called via child process, only parent can call it.

//If child process calls the fork call, an error will be thrown

//If you kill the parent, all children will be killed too.


const cluster = require("node:cluster");
const os = require("node:os");

if(cluster.isPrimary){
    console.log(`This is the parent with PID ${process.pid}`);
    const coreCount = os.availableParallelism();
    for(let i = 0 ; i < coreCount ; i++){
        const worker = cluster.fork();
        console.log(`The parent process spawned a new child process with PID ${worker.process.pid}`)
    }  
}
else{
    console.log("Hello I am a child process")
}