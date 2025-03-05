import { Classe } from "./Classe";

export class Etudiant {
  constructor(
    private _id: number,
    private _nomComplet: string,
    private _matricule: number,
    private _login: string,
    private _adresse: string,
    private _password: string,
    private _classeId: Classe
  ) {}

  // Getters
  public get id(): number {
    return this._id;
  }

  public get nomComplet(): string {
    return this._nomComplet;
  }

  public get matricule(): number {
    return this._matricule;
  }

  public get login(): string {
    return this._login;
  }

  public get adresse(): string {
    return this._adresse;
  }

  public get password(): string {
    return this._password;
  }

  public get classeId(): Classe {
    return this._classeId;
  }

  // Setters
  public set id(value: number) {
    this._id = value;
  }

  public set nomComplet(value: string) {
    this._nomComplet = value;
  }

  public set matricule(value: number) {
    this._matricule = value;
  }

  public set login(value: string) {
    this._login = value;
  }

  public set adresse(value: string) {
    this._adresse = value;
  }

  public set password(value: string) {
    this._password = value;
  }

  public set classeId(value: Classe) {
    this._classeId = value;
  }
}
