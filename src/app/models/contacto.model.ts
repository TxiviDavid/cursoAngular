import { Grupo } from './grupo.models';
import { Sector } from './sector.models';


export class Contacto {
    name: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    grupo: Grupo;
    sector: Sector;
    aficiones: Array<any>;

    constructor() {
        this.aficiones = [];
    }
}