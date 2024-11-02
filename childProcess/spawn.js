const {spawn} = require("node:child_process");


//This works

//Spawn is very powerful, it can spawn any process.

//exec it just build on top of spawn , it runs a non login and non interactive shell and pass argumnets to it.

//When a process is run , it contains a process object , which contains things like pid , ppid , argv.

//argv contains all the argumnet passes to a process


//using spawn we can spawn any process , just provide the path of execuitable file and it will spawn the process for you.

// as node process is the parenet process of this process, it can also control what environmnet variable to pass
const subprocess1 = spawn("ls" , ["-l"]  ,{
    env : {name : "ADTIYA VIKRAM"}
});

let data1 = []; 

subprocess1.stdout.on("data" , (chunk)=>{
      data1.push(chunk);
})

subprocess1.stdout.on("end" , ()=>{
    console.log(data1.toString("utf-8"));
})

subprocess1.stdout.on("error", (error)=>{
    console.log("Error :-" , error.message);
 
} )

subprocess1.on("error" , (error)=>{
    console.log("Error :-" , error.message);
 
})

// *********************************************************************


//This does not work

const subprocess2 = spawn("ll");

let data2 = []; 

subprocess2.stdout.on("data2" , (chunk)=>{
      data2.push(chunk);
})

subprocess2.stdout.on("end" , ()=>{
    console.log(data2.toString("utf-8"));
})

subprocess2.stdout.on("error", (error)=>{
    console.log("Error :-" , error.message);

} )

subprocess2.on("error" , (error)=>{
    console.log("Error :-" , error.message);
})


// *********************************************************************



const subprocess3 = spawn("echo" , ["My" , "name" , "is " , "Aditya" , "|" , "tr" , "' '" , "\n"]);

let data3 = []; 

subprocess3.stdout.on("data" , (chunk)=>{
      data3.push(chunk);
})

subprocess3.stdout.on("end" , ()=>{
    console.log(data3.toString("utf-8"));
})

subprocess3.stdout.on("error", (error)=>{
    console.log("Error :-" , error.message);

} )

subprocess3.on("error" , (error)=>{
    console.log("Error :-" , error.message);
})


// *********************************************************************