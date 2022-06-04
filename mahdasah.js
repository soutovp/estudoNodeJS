const path = require("path")

//retorna o nome do arquivo atual
//path.basename(filename)
console.log(path.basename(__filename));

//retorna o nome do diretório do arquivo atual 
// path.dirname(filename)
console.log(path.dirname(__filename));

//retorna a extensão do arquivo
//path.extname(filename)
console.log(path.extname(__filename));

//cria um objeto com alguns dados do arquivo(nome, caminho, extensão, etc)
//path.parse(filename)
console.log(path.parse(__filename));

//junta caminhos de arquivos e também arquivos
//path.join(dirname,'pasta1','pasta2', 'teste.txt')
console.log(path.join(__dirname,'pasta1','pasta2', 'teste.txt'));