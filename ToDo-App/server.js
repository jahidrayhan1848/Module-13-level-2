  
  const data = [
  {
    "id": 1,
    "name": "Laptop",
    "price": 1200
  },
  {
    "id": 2,
    "name": "Phone",
    "price": 800
  },
  {
    "id": 3,
    "name": "Smartwatch",
    "price": 300
  },
  {
    "id": 4,
    "name": "Tablet",
    "price": 1200
  },
  {
    "id": 5,
    "name": "Monitor",
    "price": 400
  }
]

  
  
  const http = require('http');
const { json } = require('stream/consumers');

   const server = http.createServer((req,res)=>{
    // console.log({res,req})
    if (req.url === '/todos' && req.method ==="GET"){

        res.writeHead(201,{
            "content-type" : "application/json"
        })
        res.end( JSON.stringify(data))
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
