const {MessageChannel} = require("worker_threads");


const channel = new MessageChannel();

const {port1 , port2} = channel;



port1.postMessage({name : "Aditya"});
port2.postMessage({name : "Vikram"});


port1.on("message" , (message)=>{
    console.log(`Message on port 1 is ` , message);
})

port2.on("message" , (message)=>{
    console.log(`Message on port 2 is ` , message);
})