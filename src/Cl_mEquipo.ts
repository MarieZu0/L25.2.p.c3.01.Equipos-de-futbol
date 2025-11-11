export interface iEquipo {
    nombreEquipo: string;
    cedula1: string;
    cedula2: string;
    cedula3: string;
    cedula4: string;
    nombre1: string;
    nombre2: string;
    nombre3: string;
    nombre4: string;
}
export default class Cl_mEquipo {
    private _nombreEquipo: string="";
    private _cedula1: string="";
    private _cedula2: string="";
    private _cedula3: string="";
    private _cedula4: string="";
    private _nombre1: string="";
    private _nombre2: string="";
    private _nombre3: string="";
    private _nombre4: string="";

    constructor({
        nombreEquipo = "",
        cedula1 = "",
        cedula2 = "",
        cedula3 = "",
        cedula4 = "",
        nombre1 = "",
        nombre2 = "",
        nombre3 = "",
        nombre4 = "",
    }: {
        nombreEquipo: string;
        cedula1: string;
        cedula2: string;
        cedula3: string;
        cedula4: string;
        nombre1: string;
        nombre2: string;
        nombre3: string;
        nombre4: string;
    }) {
        this.nombreEquipo = nombreEquipo;
        this.cedula1 = cedula1;
        this.cedula2 = cedula2;
        this.cedula3 = cedula3;
        this.cedula4 = cedula4;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.nombre3 = nombre3;
        this.nombre4 = nombre4;
    }
    set nombreEquipo(nombreEquipo: string) {
        this._nombreEquipo = nombreEquipo.trim().toUpperCase();
    }
    get nombreEquipo(): string {
        return this._nombreEquipo;
    }

    set cedula1(cedula1: string) {
        this._cedula1 = cedula1.trim();
    }
    get cedula1(): string {
        return this._cedula1;
    }

    set cedula2(cedula2: string) {
        this._cedula2 = cedula2.trim();
    }
    get cedula2(): string {
        return this._cedula2;
    }

    set cedula3(cedula3: string) {
        this._cedula3 = cedula3.trim();
    }
    get cedula3(): string {
        return this._cedula3;
    }

    set cedula4(cedula4: string) {
        this._cedula4 = cedula4.trim();
    }
    get cedula4(): string {
        return this._cedula4;
    }

    set nombre1(nombre1: string) {
        this._nombre1 = nombre1.trim().toUpperCase();
    }
    get nombre1(): string {
        return this._nombre1;
    }

    set nombre2(nombre2: string) {
        this._nombre2 = nombre2.trim().toUpperCase();
    }
    get nombre2(): string {
        return this._nombre2;
    }

    set nombre3(nombre3: string) {
        this._nombre3 = nombre3.trim().toUpperCase();
    }
    get nombre3(): string {
        return this._nombre3;
    }

    set nombre4(nombre4: string) {
        this._nombre4 = nombre4.trim().toUpperCase();
    }
    get nombre4(): string {
        return this._nombre4;
    }

        cantidadJugadores(): number {
        let cantidad = 0;
        if (this.cedula1) cantidad++;
        if (this.cedula2) cantidad++;
        if (this.cedula3) cantidad++;
        if (this.cedula4) cantidad++;
        return cantidad;
        }

    error(): string | false {
        // Validar nombre del grupo
        if (this.nombreEquipo.length === 0) {
            return "El nombre del grupo no puede estar vacío";
        }

        // Validar cédulas repetidas
        if (
            this.cedula1 === this.cedula2 ||
            this.cedula1 === this.cedula3 ||
            this.cedula1 === this.cedula4 ||
            this.cedula2 === this.cedula3 ||
            this.cedula2 === this.cedula4 ||
            this.cedula3 === this.cedula4
        ) {
            return `El equipo ${this.nombreEquipo} tiene cédulas repetidas`;
        }
        return false;
    }
    existeCedula(cedula: string | null): boolean {
        if (cedula === null) return false;
        if (this.cedula1 === cedula) return true;
        if (this.cedula2 === cedula) return true;
        if (this.cedula3 === cedula) return true;
        if (this.cedula4 !== null && this.cedula4 === cedula) return true;
        return false;
} 
    toJSON(): iEquipo {
        return {
            nombreEquipo: this._nombreEquipo,
            cedula1: this._cedula1,
            cedula2: this._cedula2,
            cedula3: this._cedula3,
            cedula4: this._cedula4,
            nombre1: this._nombre1,
            nombre2: this._nombre2,
            nombre3: this._nombre3,
            nombre4: this._nombre4,
        };
    }
}