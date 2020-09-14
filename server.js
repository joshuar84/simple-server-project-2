const http = require('http');

http.createServer(function(req, res){
    if (req.url === "/OK") {
        console.log("Inbound 'OK' being processed");
        res.writeHead(200);
        res.write('<h1>Hello world</h1>')
        res.end();
    } else if (req.url === '/Created') {
        console.log('Inbound created');
        res.writeHead(201);
        res.end();
    } else if (req.url === '/Moved-Permanently') {
        console.log('Resource moved');
        res.writeHead(301, {'Location': "http://www.google.com"});
        res.end();
    } else if (req.url === '/Found') {
        console.log('Resource moved temporarily');
        res.writeHead(302, {'Location': 'https://www.github.com'});
        res.end();
    } else if (req.url === '/Bad-Request') {
        console.log('Couldn\'t understand request');
        res.writeHead(400);
        res.end();
    } else if (req.url === '/Unauthorized') {
        console.log('Not proper authentication');
        res.writeHead(401);
        res.end();
    } else if (req.url === '/Forbidden') {
        console.log('Improper credentials');
        res.writeHead(403);
        res.end();
    } else if (req.url === '/Internal-Server-Error') {
        console.log('Server error');
        res.writeHead(500);
        res.end();
    } else if (req.url === '/Gateway-Timeout') {
        console.log('Slow server response');
        res.writeHead(504);
        res.end();
    } else {
        console.log("Error code 404")
        res.writeHead(404)
        res.end()
    }
    res.end();
}).listen(3000, function(){
    console.log("listening on port 3000...")
})



