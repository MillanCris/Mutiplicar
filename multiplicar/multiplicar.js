const colors = require('colors');
const fs = require('fs');


let listar = (base, limite = 10) => {

    console.log(`**********************`.green);
    console.log(`tabla de ${ base }`.green);
    console.log(`**********************`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ i } * ${ base }  = ${ i * base }\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base \'${ base }\' no es un numero`);
            return; //para ddetener la funcion
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `base ${base} * ${ i } = ${ base * i} \n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }-limite-${limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla ${ base }.txt`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}