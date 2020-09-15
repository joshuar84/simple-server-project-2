const http = require('http');

http.createServer(function(req, res){
    if (req.url === "/OK") {
        console.log("Inbound 'OK' being processed");
        res.writeHead(200);
        res.end();
    } else if (req.url === '/Created') {
        console.log('Inbound-created');
        res.writeHead(201);
        res.end();
    } else if (req.url === '/Moved-Permanently') {
        console.log('Moved-Permanently');
        res.writeHead(301);
        res.end();
    } else if (req.url === '/Found') {
        console.log('Found');
        res.writeHead(302);
        res.end();
    } else if (req.url === '/Bad-Request') {
        console.log('Bad-Request');
        res.writeHead(400);
        res.end();
    } else if (req.url === '/Unauthorized') {
        console.log('Unauthorized');
        res.writeHead(401);
        res.end();
    } else if (req.url === '/Forbidden') {
        console.log('Forbidden');
        res.writeHead(403);
        res.end();
    } else if (req.url === '/Internal-Server-Error') {
        console.log('Internal-Server-Error');
        res.writeHead(500);
        res.end();
    } else if (req.url === '/Gateway-Timeout') {
        console.log('Gateway-Timeout');
        res.writeHead(504);
        res.end();
    } else if (req.url === '/Bonus/Redirect') {
        console.log('Forbidden');
        res.writeHead(302, {'Location': 'http://localhost:3000/Forbidden'});
        res.end();
    } else if (req.url === '/Bonus/Webpage') {
        res.writeHead(200);
        res.write('<h1>Jello, Burled!</h1>');
        res.end();
    } else {
        console.log("Error code 404");
        res.writeHead(404);
        res.end();
    }
    res.end();
}).listen(3000, function(){
    console.log("listening on port 3000...");
})
