// console.log(process.argv)

// path add 
const path = require('path');

const fs = require ('fs');


const result = process.argv.slice(2)
const joint = result.join(" ").trim();


 const timeStamp = new Date().toISOString();

const message = `${joint}  ${timeStamp}\n`;


if(!message){
    console.log("example:: node index.js hey i love you");
     process.exit(1);
}
const pathName=path.join(__dirname,"log.txt");
 fs.appendFile(pathName,message,{encoding : "utf-8"}, ()=>{
    console.log("sucessfully added")
 } )



// console.log(joint)
// console.log(message)