const {exec} = require("node:child_process");


exec("ls -l" , (err , stdout , stderr)=>{
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

exec("echo \"Hi my name is aditya\" | tr ' ' '\n' " , (err , stdout , stderr)=>{
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


//does not work

exec("ll" , (err , stdout , stderr)=>{
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


//Why it doesn't work with ll :-

//When we run some command by using exec, it starts a child process in which it opens a non-login and non-interactive shell. 
// And since files like .zshrc does not run first when a non-login , non interactice shell is run, we don't have aliases that are loaded when files like .zshrc are run.
