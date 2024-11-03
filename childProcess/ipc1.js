const {stdin , stdout , stderr} = require("node:process");

//stdin gives data from other proces to our process 
// p1-----stdin----->our_process

stdin.on("data" , (data)=>{
    // console.log("This data is comming from stdin :-" , data.toString("utf-8"));
    //or 
    stdout.write(`This data is comming from stdin :- ${data.toString("utf-8")}\n`)
});

//stdout and stderr are streams that gives data from our process to other process.
//our_process---------stdout--------p2.
//the default output of stdout and stderr is terminal.
stdout.write("This the data I want to transfer via stdout");
stderr.write("This the data I want to transfer via stderr");