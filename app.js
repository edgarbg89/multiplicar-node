const argv = requiere("yargs").argv;
require("./multiplicar/multiplicar.js");

let base = process.argv[2].split("=")[1];

crearArchivo(base)
  .then(archivo => console.log(`Archivo creado ${archivo}`))
  .catch(e => console.log(`Error guardando el archivo: ${e}`));
