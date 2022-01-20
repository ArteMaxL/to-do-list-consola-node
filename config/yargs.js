const argv = require("yargs")
    .command("crear", "Crea un elemento por hacer.", {
        descripcion: {
            alias: "d",
            demand: true,
            desc: "Descripción de la tarea por hacer."
        }})
    .command("actualizar", "Actualiza el estado completado de una tarea.", {
        descripcion: {
            demand: true,
            alias: "d"
        },
        completado: {
            alias: "c",
            default: true,
            desc: "Marca la tarea como completada"
        }})
    .command("listar", "Muestra la lista de tareas.", {
        completado: {
            alias: "c",
            default: true,
            desc: "Muestra un listado completada o pendiente"
        }})
    .command("borrar", "Borra un elemento del listado", {
        descripcion: {
            demand: true,
            alias: "d"
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}