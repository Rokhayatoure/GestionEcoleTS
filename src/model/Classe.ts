import { Niveau } from "./Niveau";
import { Filiere } from "./Filiere";

export class Classe {
  constructor(
    private _id: number,
    private _nom: string,
    private _niveau: Niveau,
    private _filiere: Filiere
  ) {}

  // Getters
  public get id(): number {
    return this._id;
  }

  public get nom(): string {
    return this._nom;
  }

  public get niveau(): Niveau {
    return this._niveau;
  }

  public get filiere(): Filiere {
    return this._filiere;
  }

  // Setters
  public set id(value: number) {
    this._id = value;
  }

  public set nom(value: string) {
    this._nom = value;
  }

  public set niveau(value: Niveau) {
    this._niveau = value;
  }

  public set filiere(value: Filiere) {
    this._filiere = value;
  }
}
