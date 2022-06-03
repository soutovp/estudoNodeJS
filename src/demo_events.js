const http = require('http');
const url = require('url');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

let myEventHandler = ()=>{
    console.log('I hear a scream!');
}
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');

http.createServer((req,res)=>{
    let q = new URL(req.url, 'http://localhost:8080/')
    var filename = `${q.pathname}`
    console.log(filename)
    fs.readFile(`src/${filename}`, (err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end('Page not Found!')
        }
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        return res.end()
    })

}).listen(8080)