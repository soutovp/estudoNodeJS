var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my text.', (err)=>{
    if (err) throw err;
    console.log('Updated!');
});

fs.writeFile('mynewfile3.txt', 'This is my text', (err)=>{
    if (err) throw err;
    console.log('Replaced');
});

fs.unlink('mynewfile3.txt', (err)=>{
    if (err) throw err;
    console.log('File Deleted!');
});

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err)=>{
    if (err) throw err;
    console.log('File Renamed!')
})