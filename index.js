// http module 
//we do not need to install it its already there and can be just required by the following code

// two machine 
// server and client

//ip adress and port  // together->socket address
// if both same machine
// ipadress -> localhost and just need to config the port



const http = require('http');
const PORT = 3000;
// avl port and free port


// http provide a creatserver function
// createserver is reponsibel for calling this callback we just need to. give the defination of the callback 
// all of the logic is going inside this callback 
// 
// req -> incoming http request obejct
// res -> outgoing http request object 



//sets up a http connection(firstly tcp connection) => raises the https reqyest
// out server -> collect request -> process request -> sends the output in res body

const server = http.createServer((req , res) =>{
       
    // send a hello world response
    console.log('Resquest recieved');
    console.log(req);
    console.log(res);

    if(req.url == '/'){
        res.writeHead('home');

    }
    else if(req.url == '/ping'){
        res.write('pong');
    }
    else{
        res.write('hello world');
    }

    // complete the response

    res.end();
});


// start ur server 


server.listen(PORT , ()=>{
    // callaback is triggereff when server is successfuly runnning and  listening

    console.log('success' , PORT);
})


// if conneced to another machine then we need to know the ip adress of the server machine in case of aws service
// therefore we need internet access because the client and server is not the machine 

