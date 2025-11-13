export default class Cl_mPartido {
    constructor() {
        this.partido = [];
    }
    agregarEquipo({ equipo, callback, }) {
        // Validar nombre del equipo repetido
        const nombreRepetido = this.partido.find((e) => e.nombreEquipo.toLowerCase() === equipo.nombreEquipo.toLowerCase());
        if (nombreRepetido) {
            callback(`El equipo ${equipo.nombreEquipo} ya existe`);
            return;
        }
        // Validar que el equipo no tenga menos de tres miembros
        if (equipo.cantidadJugadores() < 3) {
            callback(`El equipo ${equipo.nombreEquipo} debe tener al menos tres miembros.`);
            return;
        }
        // Validar cedula repetida
        if (equipo.error()) {
            callback(`El equipo ${equipo.nombreEquipo} tiene cédula repetida internamente.`);
            return;
        }
        // Validar cedulas contra todos los equipos existentes
        for (const e of this.partido) {
            if (e.existeCedula(equipo.cedula1) ||
                e.existeCedula(equipo.cedula2) ||
                e.existeCedula(equipo.cedula3) ||
                e.existeCedula(equipo.cedula4)) {
                callback(`El equipo ${equipo.nombreEquipo} tiene cédula repetida con el equipo ${e.nombreEquipo}.`);
                return;
            }
        }
        // Si todo está bien, agregar el equipo
        this.partido.push(equipo);
        localStorage.setItem("partido", JSON.stringify(this.listar()));
        callback(false);
    }
    listar() {
        let lista = [];
        this.partido.forEach((equipo) => {
            lista.push(equipo.toJSON());
        });
        return lista;
    }
}
