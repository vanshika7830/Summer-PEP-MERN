const http = require('http');
const server = http.createServer((req, res) => {
    // res.end("Response from server");
    if(req.url === '/'){
        res.end("Home")
    }
    else if(req.url === '/login'){
        res.end("Login response")
    }
    else{
        res.end("Not found");
    }
});
server.listen(3000, () =>{
    console.log("Server is running");
});

// To avoid if else ladder we use express (minimal framework), it gives us functions to create routes, middleware