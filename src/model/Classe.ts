export class Classe{
    constructor(
        private _id: number,
        private _nom: string,
        // private _filiere: Filiere,
        // private _niveau: Niveau
    ){}
    get id(): number{
        return this._id;
    }
     
    set id(value: number){
        this._id = value;
    }
    get nom(): string{
        return this._nom;
    }

    get filiere(): Filiere{
        return this.filiere;        
    }
    set filiere(value: Filiere){
        this._filiere = value;
    }
    get niveau(): Niveau{
        return this._niveau;
    }
    set niveau(value: Niveau){
        this._niveau = value;
    }

}