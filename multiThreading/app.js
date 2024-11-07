//The stdin , stdout and stderr of every thread is connected to the mail thread

//If the main thread is block  by suppose a big loop, this thread will not log data until the mail thread is free

const a = 50;

console.log(a);