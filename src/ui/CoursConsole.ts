import * as readline from "readline-sync";
import { MenuPrinciplae } from "./MenuePrincipale"; 
import { Cours } from "../model/Cours";
import { Classe } from "../model/Classe";
import { Niveau } from "../model/Niveau";
import { Filiere } from "../model/Filiere";

// Classe de gestion des cours dans la console
export class CoursConsole {
    private static coursList: Cours[] = []; // Liste des cours
    private static nextId: number = 1;

    static menuCours(): void {
        console.clear();
        console.log("==== Gestion des Cours ====");
        console.log("\n1 - Lister les Cours");
        console.log("2 - Créer un Cours");
        console.log("3 - Modifier un Cours");
        console.log("4 - Supprimer un Cours");
        console.log("5 - Retour au menu principal");

        let choix = parseInt(readline.question("\nVotre choix : "));
        switch (choix) {
            case 1:
                this.listerCours();
                break;
            case 2:
                this.creerCours();
                break;
            case 3:
                this.modifierCours();
                break;
            case 4:
                this.supprimerCours();
                break;
            case 5:
                MenuPrinciplae.MenuePRincipale()
                break;// Retourner au menu principal
            default:
                console.log("\nChoix invalide !");
        }

        MenuPrinciplae.patienter();
        this.menuCours(); // Revenir au menu des cours si l'utilisateur ne revient pas au menu principal
    }

    static listerCours(): void {
        console.clear();
        console.log("\n=== Liste des Cours ===");
        if (this.coursList.length === 0) {
            console.log("\nAucun cours disponible.");
        } else {
            this.coursList.forEach(cours => {
                console.log(`ID: ${cours.id} | DateCours: ${cours.dateCours} | Durée: ${cours.duree}  Classe: ${cours.classe.nom}`);
            });
        }
    }

    static creerCours(): void {
        console.clear();
        console.log("\n=== Création d'un Cours ===");
    
        let dateCours = new Date(readline.question("Date du cours (YYYY-MM-DD) : "));
        let duree = parseInt(readline.question("Durée du cours en minutes : "));
        
        // Demande des informations pour la classe
        let classeId = parseInt(readline.question("ID de la classe : "));
        let classeNom = readline.question("Nom de la classe : ");
    
        // Demander le niveau
        let niveauId: number = parseInt(readline.question("ID du niveau : "));

        let niveauNom = readline.question("Nom du niveau (ex: Licence, Master, etc.) : ");
          let niveau = new Niveau(niveauId, niveauNom); // Crée une instance de Niveau en fonction de l'entrée utilisateur
    
        // Demander la filière
        let filiereId: number = parseInt(readline.question("ID de la filière : " ));
        let filiereNom = readline.question("Nom de la filière : ");
        let filiere = new Filiere( filiereId ,filiereNom); // Crée une instance de Filiere
    
        // Créer une nouvelle instance de Classe avec l'ID, le nom, le niveau et la filière
        let classe = new Classe(classeId, classeNom, niveau, filiere);
    
        // Créer le nouveau cours
        let nouveauCours = new Cours(this.nextId++, dateCours, duree, classe); 
        this.coursList.push(nouveauCours);
        console.log("\nCours ajouté avec succès !");
    }
    

    static modifierCours(): void {
        console.clear();
        console.log("\n=== Modification d'un Cours ===");
        this.listerCours();
        let id = parseInt(readline.question("\nEntrez l'ID du cours à modifier : "));
        let cours = this.coursList.find(c => c.id === id);

        if (!cours) {
            console.log("\nCours non trouvé !");
            return;
        }

        // let nouveauNom = readline.question("Nouveau nom du cours (laisser vide pour ne pas changer) : ");
        // let nouvelleDescription = readline.question("Nouvelle description (laisser vide pour ne pas changer) : ");
        let nouvelleDateCours = readline.question("Nouvelle date du cours (laisser vide pour ne pas changer) : ");
        let nouvelleDuree = readline.question("Nouvelle durée du cours en minutes (laisser vide pour ne pas changer) : ");

        // if (nouveauNom) cours.nom = nouveauNom;
        // if (nouvelleDescription) cours. = nouvelleDescription;
        if (nouvelleDateCours) cours.dateCours = new Date(nouvelleDateCours);
        if (nouvelleDuree) cours.duree = parseInt(nouvelleDuree);

        console.log("\nCours modifié avec succès !");
    }

    static supprimerCours(): void {
        console.clear();
        console.log("\n=== Suppression d'un Cours ===");
        this.listerCours();
        let id = parseInt(readline.question("\nEntrez l'ID du cours à supprimer : "));
        let index = this.coursList.findIndex(c => c.id === id);

        if (index === -1) {
            console.log("\nCours non trouvé !");
            return;
        }

        this.coursList.splice(index, 1);
        console.log("\nCours supprimé avec succès !");
    }
}
