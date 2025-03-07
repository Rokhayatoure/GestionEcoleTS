import {Niveau} from "../model/Niveau";
import {NiveauConsole} from "../ui/NiveauConsole";
import * as readline from "readline-sync";

export namespace NiveauService {
    let niveaux: Niveau[] = []

    export function showNiveau(): void {
        console.log("Liste des niveaux : ");
        if (niveaux.length === 0) {
            console.log("Aucun Niveau disponible.");
        } else {
            console.table(niveaux.map(niveau => ({ ID: niveau.id, Nom: niveau.nom })));
        }
        NiveauConsole.menuNiveau();
    }

    export function addNiveau(): void {
        console.log("Traitement ajout de niveau...")
        const nom:string = readline.question("Entrer le libellé: ")
        const id:number = niveaux.length + 1
        const newNiveau = new Niveau(id, nom)
        niveaux.push(newNiveau);
        console.log(`Niveau "${nom}"  ajouté avec succès ✓`)

        NiveauConsole.menuNiveau();
    }

    export function deleteNiveau(): void {
        console.log("Traitement suppression de niveau...")
        const idN = readline.questionInt("Entrer l'ID du niveau: ")
        const nivau = niveaux.findIndex(nv => nv.id === idN)
        if (idN !== -1) {
            const delNiveau =  niveaux.splice(nivau, 1)[0]
            console.log(`Niveau "${delNiveau.nom}" supprimé ⌀`)
        }
        else {
            console.log("L'ID saisie n'a pas de correspondance !")
        }
        NiveauConsole.menuNiveau();
    }

    export function updateNiveau(): void {
        console.log("Traitement modification de niveau...")
        const idN = readline.questionInt("Entrer l'ID du niveau à modifier: ")
        const nivau = niveaux.find(nv => nv.id === idN)
        if (nivau) {
            const nouveauNom:string = readline.question("Entrer le nom du niveau: ");
            nivau.nom = nouveauNom
            console.log(`Niveau modifié : "${nouveauNom}"`)
        }
        else {
            console.log("Correspondant non trouvé !");
        }
        NiveauConsole.menuNiveau();
    }
}