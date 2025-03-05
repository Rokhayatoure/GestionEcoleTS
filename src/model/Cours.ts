import { Classe } from "./Classe";

 export class Cours {
    constructor(
        private _id: number,
        private _dateCours: Date,
        private _duree: number,
        private  _laces_Id :Classe
        // En supposant que la durée est exprimée en minutes
    ) {}

    // Getter pour id
    get id(): number {
        return this._id;
    }

    // Getter pour dateCours
    get dateCours(): Date {
        return this._dateCours;
    }

    // Getter pour duree
    get duree(): number {
        return this._duree;
    }
}


