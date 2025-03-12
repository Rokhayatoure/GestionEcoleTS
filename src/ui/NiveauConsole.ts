import {MenuPrinciplae} from "./MenuePrincipale";
import {NiveauService} from "../services/NiveauService";
import * as readline from "readline-sync";

export class NiveauConsole {
    static menuNiveau() {
        console.log("※※※▷ Gestion des niveaux ◁※※※");
        console.log(
            "\n1 - Afficher les niveaux",
            "\n2 - Ajouter une niveau",
            "\n3 - Modifier une niveau",
            "\n4 - Supprimer une niveau",
            "\n5 - ⇚ Retour"
        );

        // Lire l'option choisie
        const choix = readline.questionInt("Choisir une option : ");

        switch (choix) {
            case 1:
                NiveauService.showNiveau()
                break;
            case 2:
                NiveauService.addNiveau()
                break;
            case 3:
                NiveauService.updateNiveau()
                break;
            case 4:
                NiveauService.deleteNiveau()
                break;
            case 5:
                MenuPrinciplae.MenuePRincipale()
                break;
            default:
                console.log("\nChoix invalide !");
                NiveauConsole.menuNiveau()
                break;
        }
    }
}

export default NiveauConsole