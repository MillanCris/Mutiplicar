const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime los objetos en consola', options)
    .command('crear', 'crea un archivo txt con la tabla de multiplicar de base siendo multiplicada de 1 hasta limite, limite por default es 10', options)
    .help()
    .argv;

module.exports = {
    argv
};