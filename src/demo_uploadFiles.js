const http = require('http');
const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const react = require('react');

http.createServer( (req, res)=>{
    if(req.url == '/fileupload'){
        let form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.filepath;
            var newpath = path.join(__dirname, '../','arquivos', files.filetoupload.originalFilename);
            console.log(newpath)
            fs.rename(oldpath, newpath, function (err){
                if(err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            })
            res.write('File Uploaded');
            res.end();
        });
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileuploads" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);