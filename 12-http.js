
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('hi this is home page');
    }
    if(req.url === '/about') {
        res.end('about page');
    }
    res.end(`
        <h1>Oops !!</h1>
        <p>i think u r lost</p>
        <a href='/'>back to us again</a>
    `)
    console.log(req);
})

server.listen(5000);