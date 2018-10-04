const argv = require('./config/yargs').argv;

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`)) //archivo.green
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}