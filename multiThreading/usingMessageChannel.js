const {MessageChannel , Worker} = require("worker_threads");


const {port1 , port2} = new MessageChannel();



// Setting up the communication channe between two threads.


const thread1 = new Worker("./app3.js" , {
    workerData : {port : port1},
    transferList : [port1]
} )



const thread2 = new Worker("./app3.js" , {
    workerData : {
        port : port2
    },
    transferList : [port2]
})


//The transfer list says that the ports have been transferred to the threads and we cannot access them using the main thread anymore. The ownership has been passed

//We can pass :- port , fileHandler , array buffer




//Setting up communiction chaneel between main thread and other threads

const channel = new MessageChannelI();


new Worker('./app3.js', {
    workerData : {
        port : channel.port2
    },
    transferList : [channel.port2]
})


