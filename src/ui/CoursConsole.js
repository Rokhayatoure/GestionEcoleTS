"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursConsole = void 0;
var readline = require("readline-sync");
var MenuePrincipale_1 = require("./MenuePrincipale");
var Cours_1 = require("../model/Cours");
var Classe_1 = require("../model/Classe");
var Niveau_1 = require("../model/Niveau");
var Filiere_1 = require("../model/Filiere");
// Classe de gestion des cours dans la console
var CoursConsole = /** @class */ (function () {
    function CoursConsole() {
    }
    CoursConsole.menuCours = function () {
        console.clear();
        console.log("==== Gestion des Cours ====");
        console.log("\n1 - Lister les Cours");
        console.log("2 - Créer un Cours");
        console.log("3 - Modifier un Cours");
        console.log("4 - Supprimer un Cours");
        console.log("5 - Retour au menu principal");
        var choix = parseInt(readline.question("\nVotre choix : "));
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
                return; // Retourner au menu principal
            default:
                console.log("\nChoix invalide !");
        }
        MenuePrincipale_1.MenuPrinciplae.patienter();
        this.menuCours(); // Revenir au menu des cours si l'utilisateur ne revient pas au menu principal
    };
    CoursConsole.listerCours = function () {
        console.clear();
        console.log("\n=== Liste des Cours ===");
        if (this.coursList.length === 0) {
            console.log("\nAucun cours disponible.");
        }
        else {
            this.coursList.forEach(function (cours) {
                console.log("ID: ".concat(cours.id, " | DateCours: ").concat(cours.dateCours, " | Dur\u00E9e: ").concat(cours.duree, "  Classe: ").concat(cours.classe.nom));
            });
        }
    };
    CoursConsole.creerCours = function () {
        console.clear();
        console.log("\n=== Création d'un Cours ===");
        var dateCours = new Date(readline.question("Date du cours (YYYY-MM-DD) : "));
        var duree = parseInt(readline.question("Durée du cours en minutes : "));
        // Demande des informations pour la classe
        var classeId = parseInt(readline.question("ID de la classe : "));
        var classeNom = readline.question("Nom de la classe : ");
        // Demander le niveau
        var niveauId = parseInt(readline.question("ID du niveau : "));
        var niveauNom = readline.question("Nom du niveau (ex: Licence, Master, etc.) : ");
        var niveau = new Niveau_1.Niveau(niveauId, niveauNom); // Crée une instance de Niveau en fonction de l'entrée utilisateur
        // Demander la filière
        var filiereId = parseInt(readline.question("ID de la filière : "));
        var filiereNom = readline.question("Nom de la filière : ");
        var filiere = new Filiere_1.Filiere(filiereId, filiereNom); // Crée une instance de Filiere
        // Créer une nouvelle instance de Classe avec l'ID, le nom, le niveau et la filière
        var classe = new Classe_1.Classe(classeId, classeNom, niveau, filiere);
        // Créer le nouveau cours
        var nouveauCours = new Cours_1.Cours(this.nextId++, dateCours, duree, classe);
        this.coursList.push(nouveauCours);
        console.log("\nCours ajouté avec succès !");
    };
    CoursConsole.modifierCours = function () {
        console.clear();
        console.log("\n=== Modification d'un Cours ===");
        this.listerCours();
        var id = parseInt(readline.question("\nEntrez l'ID du cours à modifier : "));
        var cours = this.coursList.find(function (c) { return c.id === id; });
        if (!cours) {
            console.log("\nCours non trouvé !");
            return;
        }
        // let nouveauNom = readline.question("Nouveau nom du cours (laisser vide pour ne pas changer) : ");
        // let nouvelleDescription = readline.question("Nouvelle description (laisser vide pour ne pas changer) : ");
        var nouvelleDateCours = readline.question("Nouvelle date du cours (laisser vide pour ne pas changer) : ");
        var nouvelleDuree = readline.question("Nouvelle durée du cours en minutes (laisser vide pour ne pas changer) : ");
        // if (nouveauNom) cours.nom = nouveauNom;
        // if (nouvelleDescription) cours. = nouvelleDescription;
        if (nouvelleDateCours)
            cours.dateCours = new Date(nouvelleDateCours);
        if (nouvelleDuree)
            cours.duree = parseInt(nouvelleDuree);
        console.log("\nCours modifié avec succès !");
    };
    CoursConsole.supprimerCours = function () {
        console.clear();
        console.log("\n=== Suppression d'un Cours ===");
        this.listerCours();
        var id = parseInt(readline.question("\nEntrez l'ID du cours à supprimer : "));
        var index = this.coursList.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.log("\nCours non trouvé !");
            return;
        }
        this.coursList.splice(index, 1);
        console.log("\nCours supprimé avec succès !");
    };
    CoursConsole.coursList = []; // Liste des cours
    CoursConsole.nextId = 1;
    return CoursConsole;
}());
exports.CoursConsole = CoursConsole;
