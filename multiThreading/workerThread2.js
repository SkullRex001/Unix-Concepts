const {Worker} = require("worker_threads");
const v8 = require("v8");



//Copy of object that we pass to worker data is created and supplied to the thread, the original data is not passed.


//This can convert anything data to buffer , except functions
const data = v8.serialize({name :"Aditya"});
console.log(data);

new Worker("./app2.js" , {
    workerData : {
        name : "Aditya"
    }
})
