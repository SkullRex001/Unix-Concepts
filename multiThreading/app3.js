const {workerData} = require("worker_threads");

const port = workerData.port;


port.postMessage("Hello this is message from worker")

port.on('message', (message)=>{
    console.log(message)
})