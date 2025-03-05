"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPrinciplae = void 0;
var readline = require("readline-sync");
var CoursConsole_1 = require("./CoursConsole");
var MenuPrinciplae = /** @class */ (function () {
    function MenuPrinciplae() {
    }
    MenuPrinciplae.MenuePRincipale = function () {
        console.log("==== Gestion de Rendez-vous ====");
        console.log("\n1 - Gérer Les Cours ");
        console.log("\n2 - Gérer les Filiere");
        console.log("\n3 - Gérer les Classes");
        console.log("\n3 - Gérer les Niveaux");
        console.log("\n4 - Quitter -->");
    };
    MenuPrinciplae.choix = function () {
        return readline.question("\nVotre choix : ");
    };
    MenuPrinciplae.traiterChoix = function (choix) {
        switch (choix) {
            case 1:
                CoursConsole_1.CoursConsole.menuCours;
                break;
            case 2:
                // this.menuPatient();
                break;
            case 3:
                // this.menuRv();
                break;
            case 4:
                // this.afficherMenu();
                break;
            default: console.log("\nVotre choix est invalide... !");
        }
    };
    MenuPrinciplae.patienter = function () {
        var gogo = readline.question("\nAppuyer pour continuer : ");
        return gogo;
    };
    return MenuPrinciplae;
}());
exports.MenuPrinciplae = MenuPrinciplae;
