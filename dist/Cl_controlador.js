import Cl_mEquipo from "./Cl_mEquipo.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarEquipo({ equipoData, callback, }) {
        this.modelo.agregarEquipo({
            equipo: new Cl_mEquipo(equipoData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    equiposRegistrados() {
        return this.modelo.listar();
    }
}
