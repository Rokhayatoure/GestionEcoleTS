import * as readline from "readline-sync";
import { MenuPrinciplae } from "./MenuePrincipale";
import { Niveau } from "../model/Niveau";
import { Filiere } from "../model/Filiere";
import { Classe } from "../model/Classe";

export class ClasseConsole {
    private static classeList: Classe[] = [];
    private static nextId: number = 1;

    static menuClasse(): void {
        console.clear();
        console.log("==== Gestion des Classes ====");
        console.log("\n1 - Lister les Classes");
        console.log("2 - Ajouter une Classe");
        console.log("3 - Modifier une Classe");
        console.log("4 - Supprimer une Classe");
        console.log("5 - Retour au menu principal");

        let choix = parseInt(readline.question("\nVotre choix : "));
        switch (choix) {
            case 1:
                this.listerClasses();
                break;
            case 2:
                this.ajouterClasse();
                break;
            case 3:
                this.modifierClasse();
                break;
            case 4:
                this.supprimerClasse();
                break;
            case 5:
                return;
            default:
                console.log("\nChoix invalide !");
        }

        MenuPrinciplae.patienter();
        this.menuClasse();
    }

    // Méthode pour lister les classes
    static listerClasses(): void {
        console.clear();
        console.log("\n=== Liste des Classes ===");
        if (this.classeList.length === 0) {
            console.log("\nAucune classe disponible.");
        } else {
            this.classeList.forEach(classe => {
                console.log(`ID: ${classe.id} | Nom: ${classe.nom} | Niveau: ${classe.niveau.nom} | Filière: ${classe.filiere.nom}`);
            });
        }
    }

    // Méthode pour ajouter une classe
    static ajouterClasse(): void {
        console.clear();
        console.log("\n=== Ajout d'une Classe ===");
        let nom = readline.question("Nom de la classe : ");
        let filiereId = parseInt( readline.question("l'id de la filliere : "));
        let filiereNom = readline.question("Nom de la Filière : ");

        let niveauNom = readline.question("Nom du Niveau : ");
        let niveauId =  parseInt(readline.question("Id du Niveau : "));
        // Création des objets Niveau et Filiere
        let niveau = new Niveau(niveauId,niveauNom);
        let filiere = new Filiere(filiereId ,filiereNom);
        // Création de la nouvelle classe avec un ID unique
        let nouvelleClasse = new Classe(this.nextId++, nom, niveau, filiere);
        this.classeList.push(nouvelleClasse);
        console.log("\nClasse ajoutée avec succès !");
    }

    // Méthode pour modifier une classe existante
    static modifierClasse(): void {
        console.clear();
        console.log("\n=== Modification d'une Classe ===");
        this.listerClasses();
        let id = parseInt(readline.question("\nEntrez l'ID de la classe à modifier : "));
        let classe = this.classeList.find(c => c.id === id);

        if (!classe) {
            console.log("\nClasse non trouvée !");
            return;
        }

        let nouveauNom = readline.question("Nouveau nom de la classe (laisser vide pour ne pas changer) : ");
        if (nouveauNom) {
            classe.nom = nouveauNom;
        }
        let nouveauNiveau = readline.question("Nouveau nom du Niveau (laisser vide pour ne pas changer) : ");
        if (nouveauNiveau) {
            classe.niveau.nom = nouveauNiveau;
        }
        let nouvelleFiliere = readline.question("Nouveau nom de la Filière (laisser vide pour ne pas changer) : ");
        if (nouvelleFiliere) {
            classe.filiere.nom = nouvelleFiliere;
        }

        console.log("\nClasse modifiée avec succès !");
    }

    // Méthode pour supprimer une classe
    static supprimerClasse(): void {
        console.clear();
        console.log("\n=== Suppression d'une Classe ===");
        this.listerClasses();
        let id = parseInt(readline.question("\nEntrez l'ID de la classe à supprimer : "));
        let index = this.classeList.findIndex(c => c.id === id);

        if (index === -1) {
            console.log("\nClasse non trouvée !");
            return;
        }

        this.classeList.splice(index, 1);
        console.log("\nClasse supprimée avec succès !");
    }
}
