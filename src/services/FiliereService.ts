    import {Filiere} from "../model/Filiere";
    import FiliereConsole from "../ui/FiliereConsole";
    import * as readline from "readline-sync";

export namespace FiliereService {
    let filieres: Filiere[] = [];

    export function showFiliere(): void {
        console.log("Liste des filières : ");
        if (filieres.length === 0) {
            console.log("Aucune filière disponible.");
        } else {
            console.table(filieres.map(filiere => ({ ID: filiere.id, Nom: filiere.nom })));
        }
        FiliereConsole.menuFiliere()
    }

    export function addFiliere(): void {
        console.log("Traitement ajout de filière...")
        const nom:string = readline.question("Entrer le libellé: ")
        const id:number = filieres.length + 1
        const newFiliere = new Filiere(id, nom);
        filieres.push(newFiliere);
        console.log(`Filière "${nom}" ajoutée avec succès ✓`);

        FiliereConsole.menuFiliere()
    }

    export function updateFiliere(): void {
        console.log("Traitement modification de filière...")
        const idF:number = readline.questionInt("Entrez l'ID de la filière à modifier: ")
        const fili = filieres.find(fl => fl.id === idF)
        if (fili) {
            const nouveauNom = readline.question("Nouveau nom de la filière : ");
            fili.nom = nouveauNom;
            console.log(`Filière modifiée : "${nouveauNom}"`);
        } else {
            console.log("Correspondant non trouvé !");
        }
        FiliereConsole.menuFiliere();
    }

    export function deleteFiliere(): void {
        console.log("Traitement suppression de filière...")
        const idF:number = readline.questionInt("Entrez l'ID de la filière: ")
        const fili = filieres.findIndex(fl => fl.id === idF)
        if (fili !== -1) {
            const delFiliere =  filieres.splice(idF, 1)[0]
            console.log(`Filière "${delFiliere.nom}" supprimée ⌀`);
        }
        else {
            console.log("L'ID saisie n'a pas de correspondance !")
        }
    }
}