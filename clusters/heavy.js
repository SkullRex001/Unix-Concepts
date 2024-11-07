const http = require("node:http");


const server = http.createServer((request , response)=>{

    let url = request.url;
    let method = request.method;

    console.log(url);
    console.log(method);

    if(url === '/' && method === "GET"){
        response.setHeader("content-type" , "application/json");
        response.end(JSON.stringify({
            message : "Hello, I am good"
        }))
    
    }

    //if a user hits this, all users will be blocked because this process will user the entire core to process one request

     if(url === '/heavy' && method === "GET"){

        console.log("hii");

        for(let i = 0 ; i < 10000000000 ; i++){}
    
        response.setHeader("content-type" , "application/json");
    
        response.end(JSON.stringify({
            message : "Hello, I was busy"
        }))
    
    }


})



server.listen(4000 , ()=>{
    console.log("Server is running on port 4000");
})


