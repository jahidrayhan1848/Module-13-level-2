  
  
  
  
  const http = require('http');

  const path = require('path');

  const fs = require ('fs')

  const pathName= path.join(__dirname,"./todo-data/todo.json");
  console.log(pathName)
  




   const server = http.createServer((req,res)=>{
   
    if (req.url === '/todos' && req.method ==="GET"){

       const data =fs.readFileSync(pathName,{encoding:"utf-8"})
        res.writeHead(201,{
            "content-type" : "application/json"
        })
        res.end( data)
}
else if ( req.url === '/todos/lubna' && req.method === 'post'.toUpperCase()) {

    res.writeHead(200,{
        "content-type": 'text/html'
    })
    res.end( " <h1>I</h1><h2>LOVE</h2><h3>YOU</h3>")
}

   })

   server.listen(5000,'127.0.0.1',()=>{
    console.log('server is listening 5000')
   })
