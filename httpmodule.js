const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Chal Gya bai</h1>');
    console.log(req.url);
});

server.listen(port, () => {
    console.log(`Your website is listening at port ${port}`);
})
