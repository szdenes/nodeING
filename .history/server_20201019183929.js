//Dependencies
const http = require('http')
const PORT = process.env.PORT || 5000


const server = http.createServer((req, res) => {
    if (req.url = '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        // res.end(`<h3> server is running on port: ${PORT} </h3>`, PORT)
        // res.end('bello borld')
    }

})


server.listen(PORT, () => { console.log(`Server is up on port ${PORT}`) })

