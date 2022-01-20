const descripcion = {
    alias: "d",
    demand: true,
    desc: "Descripción de la tarea por hacer."
};

const completado = {
    alias: "c",
    default: true,
    desc: "Marca la tarea como pendiente o completada."
};

const argv = require("yargs")
    .command("crear", "Crea un elemento por hacer.", {
        descripcion
    })
    .command("actualizar", "Actualiza el estado de una tarea.", {
        descripcion,
        completado
    })
    .command("listar", "Muestra la lista de tareas.", {
        completado
    })
    .command("borrar", "Borra un elemento del listado.", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}