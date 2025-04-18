const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method === 'GET'){
        res.write('<h1>WellCome To Simple Server</h1>');
        res.end();
    }
    else if(req.method === 'POST'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Your Data has been received');
    }
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})