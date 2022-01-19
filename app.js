const argv = require("./config/yargs").argv;

let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log("Crear una tarea por hacer.");
        break;
    case "listar":
        console.log("Mostrar tareas por hacer.");
        break;
    case "actualizar":
        console.log("Actualizar una tarea por hacer.");
        break;
    default:
        console.log("Comando no reconocido.");
};