import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vPartido extends Cl_vGeneral {
    constructor() {
        super({ formName: "partido" });
        this.btAgregarEquipo = this.crearHTMLButtonElement("btAgregarEquipo", {
            onclick: () => this.agregarEquipo(),
        });
        this.divEquiposRegistrados = this.crearHTMLElement("divEquiposRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarEquiposRegistrados(),
        });
    }
    mostrarEquiposRegistrados() {
        var _a;
        this.divEquiposRegistrados.innerHTML = "";
        let partido = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.equiposRegistrados();
        if (!partido)
            return;
        partido.forEach((equipo) => {
            this.divEquiposRegistrados.innerHTML += `<t>
            <td>${equipo.nombreEquipo}</td>
            <td>${equipo.nombre1}</td>
            <td>${equipo.cedula1}</td>
            <td>${equipo.nombre2}</td>
            <td>${equipo.cedula2}</td>
            <td>${equipo.nombre3}</td>
            <td>${equipo.cedula3}</td>
            <td>${equipo.nombre4 ? equipo.nombre4 : ""}</td>
            <td>${equipo.cedula4 ? equipo.cedula4 : ""}</td>
        </tr>`;
        });
    }
    agregarEquipo() {
        let nombreEquipo = prompt("Ingrese el nombre del equipo:");
        if (!nombreEquipo)
            return;
        let nombre1 = prompt("Ingrese el nombre del miembro 1:");
        if (!nombre1)
            return;
        let cedula1 = prompt("Ingrese la cédula 1:");
        if (!cedula1)
            return;
        let nombre2 = prompt("Ingrese el nombre del miembro 2:");
        if (!nombre2)
            return;
        let cedula2 = prompt("Ingrese la cédula 2:");
        if (!cedula2)
            return;
        let nombre3 = prompt("Ingrese el nombre del miembro 3:");
        if (!nombre3)
            return;
        let cedula3 = prompt("Ingrese la cédula 3:");
        if (!cedula3)
            return;
        let nombre4 = prompt("Ingrese el nombre del miembro 4 (opcional):");
        let cedula4 = prompt("Ingrese la cédula 4 (opcional):");
        this.controlador.agregarEquipo({
            equipoData: {
                nombreEquipo: nombreEquipo,
                nombre1: nombre1,
                cedula1: cedula1,
                nombre2: nombre2,
                cedula2: cedula2,
                nombre3: nombre3,
                cedula3: cedula3,
                nombre4: nombre4 ? nombre4 : "",
                cedula4: cedula4 ? cedula4 : "",
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
