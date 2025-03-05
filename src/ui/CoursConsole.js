"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursConsole = void 0;
// import * as readline from "readline-sync";
var MenuePrincipale_1 = require("./MenuePrincipale");
var CoursConsole = /** @class */ (function () {
    function CoursConsole() {
    }
    CoursConsole.menuCours = function () {
        console.clear();
        console.log("1 - Lister Cours");
        console.log("\n2 - Créer un Cours");
        MenuePrincipale_1.MenuPrinciplae.patienter();
    };
    return CoursConsole;
}());
exports.CoursConsole = CoursConsole;
