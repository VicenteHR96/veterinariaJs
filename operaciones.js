const fs = require("fs");

const registrar = (nombre, edad, tipoAnimal, colorAnimal, enfermedad) => {
  const registro_nuevo = {
    nombre: nombre,
    edad: edad,
    tipoAnimal: tipoAnimal,
    colorAnimal: colorAnimal,
    enfermedad: enfermedad,
  };
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  citas.push(registro_nuevo);
  fs.writeFileSync("citas.json", JSON.stringify(citas));
  console.log(`Ha registrado a ${nombre} de manera exitosa.`);
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log(citas);
};

module.exports = { registrar, leer };
