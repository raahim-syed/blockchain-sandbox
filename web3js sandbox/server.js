const Web3 = require("web3");
const {createServer} = require("http");
const fs = require("fs").promises;


//Port
const port = 4000;

//Creating Server
const server = createServer();

//Checking For Requests
server.on("request", async (req, res) => {
        if(req.url === "/"){
                const indexPage = await fs.readFile(__dirname + "/index.html","utf-8");
                //const css = await fs.readFile(__dirname + "/style.css");
        
                //Sending Headers
                res.writeHeader(200, {"Content-Type": "text/html"});  
        
                //Loading index.html file on browser
                res.end(indexPage); 

        }else if(req.url == "/style.css"){
                const pageCSS = await fs.readFile(__dirname + req.url);
                //const css = await fs.readFile(__dirname + "/style.css");

                
                //Sending Headers
                res.writeHeader(200, {"Content-Type": "text/css"});  

                //Loading index.html file on browser
                res.end(pageCSS)     
        }else if(req.url == "/script.js"){
                const pageJS = await fs.readFile(__dirname + "/script.js");
                //const css = await fs.readFile(__dirname + "/style.css");

                //Sending Headers
                res.writeHeader(200, {"Content-Type": "application/json"});  

                //Loading index.html file on browser
                res.end(pageJS);      
        }
})


server.listen(port, () => console.log("Server running on port: " + port))


