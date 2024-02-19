const { registrar, leer } = require("./operaciones.js");

const operacion = process.argv[2];

if (operacion === "registrar") {
  const [, , , nombre, edad, tipo, color, sintomas] = process.argv;
  registrar(nombre, edad, tipo, color, sintomas);
} else if (operacion === "leer") {
  leer();
} else {
  console.log(
    "Por favor ejecute una operación disponible. Intente nuevamente."
  );
}
