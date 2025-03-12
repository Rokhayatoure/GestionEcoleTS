import * as readline from "readline-sync";
import { MenuPrinciplae } from "./MenuePrincipale";
import { Etudiant } from "../model/Etudiant";
import { Classe } from "../model/Classe";
import { Niveau } from "../model/Niveau";
import { Filiere } from "../model/Filiere";

export class EtudiantConsole {
    private static etudiants: Etudiant[] = [];
    private static nextId: number = 1;

    static menuEtudiant(): void {
        console.clear();
        console.log("==== Gestion des Etudiants ====");
        console.log("\n1 - Lister les Etudiants");
        console.log("2 - Ajouter un Etudiant");
        console.log("3 - Modifier un Etudiant");
        console.log("4 - Supprimer un Etudiant");
        console.log("5 - Retour au menu principal");

        let choix = parseInt(readline.question("\nVotre choix : "));
        switch (choix) {
            case 1:
                this.listerEtudiants();
                break;
            case 2:
                this.ajouterEtudiant();
                break;
            case 3:
                this.modifierEtudiant();
                break;
            case 4:
                this.supprimerEtudiant();
                break;
            case 5:
                return;
            default:
                console.log("\nChoix invalide !");
        }

        MenuPrinciplae.patienter();
        this.menuEtudiant();
    }

    static listerEtudiants(): void {
        console.clear();
        console.log("\n=== Liste des Etudiants ===");
        if (this.etudiants.length === 0) {
            console.log("\nAucun étudiant disponible.");
        } else {
            this.etudiants.forEach(etudiant => {
                console.log(`ID: ${etudiant.id} | Nom: ${etudiant.nomComplet} | Matricule: ${etudiant.matricule} | Login: ${etudiant.login} | Adresse: ${etudiant.adresse} | Classe: ${etudiant.classeId.nom}`);
            });
        }
    }

    static ajouterEtudiant(): void {
        console.clear();
        console.log("\n=== Ajout d'un Etudiant ===");
        let nomComplet = readline.question("Nom complet : ");
        let matricule = parseInt(readline.question("Matricule : "));
        let login = readline.question("Login : ");
        let adresse = readline.question("Adresse : ");
        let password = readline.question("Mot de passe : ");

        // Saisie des informations pour la classe de l'étudiant
        console.log("\n--- Informations sur la Classe ---");
        let classeId = parseInt(readline.question("ID de la Classe : "));
        let classeNom = readline.question("Nom de la Classe : ");
        let niveauId = parseInt(readline.question("ID du Niveau : "));
        let niveauNom = readline.question("Nom du Niveau : ");
        let filiereId = parseInt(readline.question("ID de la Filière : "));
        let filiereNom = readline.question("Nom de la Filière : ");

        let niveau = new Niveau(niveauId,niveauNom);
        let filiere = new Filiere(filiereId, filiereNom);
        let classe = new Classe(classeId, classeNom, niveau, filiere);

        let nouvelEtudiant = new Etudiant(this.nextId++, nomComplet, matricule, login, adresse, password, classe);
        this.etudiants.push(nouvelEtudiant);
        console.log("\nÉtudiant ajouté avec succès !");
    }

    static modifierEtudiant(): void {
        console.clear();
        console.log("\n=== Modification d'un Étudiant ===");
        this.listerEtudiants();
        let id = parseInt(readline.question("\nEntrez l'ID de l'étudiant à modifier : "));
        let etudiant = this.etudiants.find(e => e.id === id);

        if (!etudiant) {
            console.log("\nÉtudiant non trouvé !");
            return;
        }

        let nouveauNom = readline.question("Nouveau nom complet (laisser vide pour ne pas changer) : ");
        if (nouveauNom) etudiant.nomComplet = nouveauNom;

        let nouveauMatricule = readline.question("Nouveau matricule (laisser vide pour ne pas changer) : ");
        if (nouveauMatricule) etudiant.matricule = parseInt(nouveauMatricule);

        let nouveauLogin = readline.question("Nouveau login (laisser vide pour ne pas changer) : ");
        if (nouveauLogin) etudiant.login = nouveauLogin;

        let nouvelleAdresse = readline.question("Nouvelle adresse (laisser vide pour ne pas changer) : ");
        if (nouvelleAdresse) etudiant.adresse = nouvelleAdresse;

        let nouveauPassword = readline.question("Nouveau mot de passe (laisser vide pour ne pas changer) : ");
        if (nouveauPassword) etudiant.password = nouveauPassword;

        // Modification de la classe
        console.log("\n--- Modification de la Classe ---");
        let changerClasse = readline.question("Voulez-vous modifier la classe ? (o/n) : ");
        if (changerClasse.toLowerCase() === 'o') {
            let classeId = parseInt(readline.question("Nouvel ID de la Classe : "));
            let classeNom = readline.question("Nouveau nom de la Classe : ");
            let niveauId = parseInt(readline.question("Nouvel ID du Niveau : "));
            let niveauNom = readline.question("Nouveau nom du Niveau : ");
            let filiereId = parseInt(readline.question("Nouvel ID de la Filière : "));
            let filiereNom = readline.question("Nouveau nom de la Filière : ");
            
            let niveau = new Niveau(niveauId,niveauNom);
            let filiere = new Filiere(filiereId, filiereNom);
            let classe = new Classe(classeId, classeNom, niveau, filiere);
            etudiant.classeId = classe;
        }

        console.log("\nÉtudiant modifié avec succès !");
    }

    static supprimerEtudiant(): void {
        console.clear();
        console.log("\n=== Suppression d'un Étudiant ===");
        this.listerEtudiants();
        let id = parseInt(readline.question("\nEntrez l'ID de l'étudiant à supprimer : "));
        let index = this.etudiants.findIndex(e => e.id === id);

        if (index === -1) {
            console.log("\nÉtudiant non trouvé !");
            return;
        }

        this.etudiants.splice(index, 1);
        console.log("\nÉtudiant supprimé avec succès !");
    }
}
