const {Worker} = require("worker_threads");


//This creates new thread
//Each thread has its own event loop

//This file is main thread

const thread1 = new Worker("./app.js")
const thread2 = new Worker("./app.js")


//Where to use it?
// If your server does some heavy calculations at some routes, you can deligate those to child threads , instead of blocking the main thread



const a = 100;
console.log(a);