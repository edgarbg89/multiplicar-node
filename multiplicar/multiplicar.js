//Requires
const fs = require("fs");

crearArchivo = async base => {
  return new Promise((resolve, reject) => {
    let data = "";

    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }

    for (let i = 1; i < 11; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      resolve(`tabla-${base}.txt`);
    });
  });
};
