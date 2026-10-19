import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from Node.js',
    path: req.url
  }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});