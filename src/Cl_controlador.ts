import Cl_mEquipo, { iEquipo } from "./Cl_mEquipo.js";
import Cl_mPartido from "./Cl_mPartido.js";
import Cl_vPartido from "./Cl_vPartido.js";

export default class Cl_controlador {
  public modelo: Cl_mPartido;
  public vista: Cl_vPartido;
  constructor(modelo: Cl_mPartido, vista: Cl_vPartido) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarEquipo({
    equipoData,
    callback,
  }: {
    equipoData: iEquipo;
    callback: Function;
  }): void {
    this.modelo.agregarEquipo({
      equipo: new Cl_mEquipo(equipoData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  equiposRegistrados(): iEquipo[] {
    return this.modelo.listar();
  }
}
