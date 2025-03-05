import { Classe } from "./Classe";

export class Cours {
  constructor(
    private _id: number,
    private _dateCours: Date,
    private _duree: number,
    private _classe: Classe // En supposant que la durée est exprimée en minutes
  ) {}

  // Getters
  public get id(): number {
    return this._id;
  }

  public get dateCours(): Date {
    return this._dateCours;
  }

  public get duree(): number {
    return this._duree;
  }

  public get classe(): Classe {
    return this._classe;
  }

  // Setters
  public set id(value: number) {
    this._id = value;
  }

  public set dateCours(value: Date) {
    this._dateCours = value;
  }

  public set duree(value: number) {
    this._duree = value;
  }

  public set classe(value: Classe) {
    this._classe = value;
  }
}
