const http = require('http');

const server = http.createServer((req, res) => {
    let categoria = req.url;
    if(categoria === '/tecnologia') { res.end("<html><body>Notícias de Tecnologia</body></html>"); }
    if(categoria === '/moda') { res.end("<html><body>Notícias de Moda</body></html>"); }
    if(categoria === '/beleza') { res.end("<html><body>Notícias de Beleza</body></html>"); }
    
    return res.end("<html><body>Portal de Notícias</body></html>");
});

server.listen(3000);