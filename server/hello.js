import { createServer } from 'node:http';

const server = createServer((req, res) => {

  if(req.url == "/"){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
    message: "Welcome to Campus Events",
    path: req.url
  }));
  }else if(req.url == "/time"){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
    message: "now: " + new Date().toISOString(), //o Date().toString
    path: req.url
  }));
  }else{
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
    message: "error: " + "Not found",
    path: req.url
  }));
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});