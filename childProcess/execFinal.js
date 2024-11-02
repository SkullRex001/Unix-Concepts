//we can fix this by sourcing a .bashrc file or bash script file before running the actual command so that our required alias and functions are loaded.

const {exec} = require("node:child_process");

exec("source bash.sh && ll" , (err , stdout , stderr)=>{
    if(err){
        console.error(err);
        return;
    }

    if(stderr){
        console.log(stderr);
        return;
    }

    console.log(stdout);
})

//still it does not work