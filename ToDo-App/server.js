   const http = require('http');

   const server = http.createServer((req,res)=>{
    // console.log({res,req})
    if (req.url === '/todos' && req.method ==="GET"){
        res.end('all todos here')
}
else if ( req.url === '/todos/lubna' && req.method === 'post'.toUpperCase()) {
    res.end('i love you ')
}

   })

   server.listen(5000,'127.0.0.1',()=>{
    console.log('server is listening 5000')
   })
