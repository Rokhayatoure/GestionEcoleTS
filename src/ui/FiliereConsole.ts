import {MenuPrinciplae} from "./MenuePrincipale";
import * as readline from "readline-sync";
import {FiliereService} from "../services/FiliereService";


export class FiliereConsole {

    static menuFiliere() {
        console.log("※※※▷ Gestion des filières ◁※※※");
        console.log(
            "\n1 - Afficher les filières",
            "\n2 - Ajouter une filière",
            "\n3 - Modifier une filière",
            "\n4 - Supprimer une filière",
            "\n5 - ⇚ Retour"
        );

        // Lire l'option choisie
        const choix = readline.questionInt("Choisir une option : ");

        switch (choix) {
            case 1:
                FiliereService.showFiliere()
                break;
            case 2:
                FiliereService.addFiliere()
                break;
            case 3:
                FiliereService.updateFiliere()
                break;
            case 4:
                FiliereService.deleteFiliere()
                break;
            case 5:
                MenuPrinciplae.MenuePRincipale()
                break;
            default:
                console.log("\nChoix invalide !");
                FiliereConsole.menuFiliere()
                break;
        }
    }

}

export default FiliereConsole