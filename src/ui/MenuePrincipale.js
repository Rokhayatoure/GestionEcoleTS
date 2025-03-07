"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPrinciplae = void 0;
var readline = require("readline-sync");
var CoursConsole_1 = require("./CoursConsole");
var MenuPrinciplae = /** @class */ (function () {
    function MenuPrinciplae() {
    }
    MenuPrinciplae.MenuePRincipale = function () {
        console.clear();
        console.log("==== Gestion des Rendez-vous ====");
        console.log("\n1 - Gérer Les Cours");
        console.log("\n2 - Gérer les Filières");
        console.log("\n3 - Gérer les Classes");
        console.log("\n4 - Gérer les Niveaux");
        console.log("\n5 - Quitter");
        var choix = parseInt(this.choix()); // Demande un choix à l'utilisateur
        if (choix === 5) {
            console.log("\nMerci d'avoir utilisé le programme. Au revoir !");
            process.exit(0); // Quitte proprement l'exécution
        }
        else {
            this.traiterChoix(choix);
        }
    };
    MenuPrinciplae.choix = function () {
        return readline.question("\nVotre choix : ");
    };
    MenuPrinciplae.traiterChoix = function (choix) {
        switch (choix) {
            case 1:
                CoursConsole_1.CoursConsole.menuCours();
                break;
            case 2:
                console.log("Gestion des Filières (à implémenter)");
                break;
            case 3:
                console.log("Gestion des Classes (à implémenter)");
                break;
            case 4:
                console.log("Gestion des Niveaux (à implémenter)");
                break;
            default:
                console.log("\nVotre choix est invalide... !");
        }
        this.patienter();
    };
    MenuPrinciplae.patienter = function () {
        readline.question("\nAppuyez sur une touche pour continuer...");
    };
    return MenuPrinciplae;
}());
exports.MenuPrinciplae = MenuPrinciplae;
