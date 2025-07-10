   const http = require('http');

   const server = http.createServer((req,res)=>{
    console.log({res,req})
   
    res.end("welcome to todo app dfvdsfsdffed")

   })

   server.listen(5000,'127.0.0.1',()=>{
    console.log('server is listening 5000')
   })
