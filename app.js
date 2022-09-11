const http = require('http')
const server = http.createServer((request, response) => {
  response.end('Hello World')
})

const port = 3000
server.listen(3000)

console.log('Hello! Server running at http://localhost:' + port + '/')
