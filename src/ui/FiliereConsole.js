"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiliereConsole = void 0;
// import {Filiere} from "../model/Filiere.ts";
var MenuePrincipale_1 = require("./MenuePrincipale");
var readline = require("readline-sync");
var FiliereConsole = /** @class */ (function () {
    function FiliereConsole() {
    }
    // private static filieres: Filiere[] = [];
    FiliereConsole.menuFiliere = function () {
        console.log("※※※▷ Gestion des filières ◁※※※");
        console.log("\n1 - Afficher les filières", "\n2 - Ajouter une filière", "\n3 - Modifier une filière", "\n4 - Supprimer une filière", "\n5 - ⇚ Quitter");
        // Lire l'option choisie
        var choix = parseInt(readline.question("Choisir une option : "));
        switch (choix) {
            case 1:
                this.affichage();
                break;
            case 2:
                this.ajout();
                break;
            case 3:
                this.modification();
                break;
            case 4:
                this.suppression();
                break;
            case 5:
                MenuePrincipale_1.MenuPrinciplae.MenuePRincipale();
                break;
            default:
                console.log("\nChoix invalide !");
                FiliereConsole.menuFiliere();
                break;
        }
    };
    FiliereConsole.affichage = function () {
        console.log("Traitement affichage des filières...");
    };
    FiliereConsole.ajout = function () {
        console.log("Traitement ajout de filière...");
    };
    FiliereConsole.modification = function () {
        console.log("Traitement modification de filière...");
    };
    FiliereConsole.suppression = function () {
        console.log("Traitement suppression de filière...");
    };
    return FiliereConsole;
}());
exports.FiliereConsole = FiliereConsole;
exports.default = FiliereConsole;
