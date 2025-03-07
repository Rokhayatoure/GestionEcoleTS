import * as readline from "readline-sync";
import { CoursConsole } from "./CoursConsole";
import FiliereConsole from "./FiliereConsole";
import NiveauConsole from "./NiveauConsole";

export class MenuPrinciplae {
    static MenuePRincipale(): void {
        console.clear();
        console.log("==== Gestion des Rendez-vous ====");
        console.log("\n1 - Gérer Les Cours");
        console.log("\n2 - Gérer les Filières");
        console.log("\n3 - Gérer les Classes");
        console.log("\n4 - Gérer les Niveaux");
        console.log("\n5 - Quitter");

        let choix = parseInt(this.choix()); // Demande un choix à l'utilisateur

        if (choix === 5) {  
            console.log("\nMerci d'avoir utilisé le programme. Au revoir !");
            process.exit(0);  // Quitte proprement l'exécution
        } else {
            this.traiterChoix(choix);
        }
    }

    static choix(): string {
        return readline.question("\nVotre choix : ");
    }

    static traiterChoix(choix: number): void {
        switch (choix) {
            case 1:
                CoursConsole.menuCours();  
                break;
            case 2:
                FiliereConsole.menuFiliere()
                break;
            case 3:
                console.log("Gestion des Classes (à implémenter)");
                break;
            case 4:
                NiveauConsole.menuNiveau();
                break;
            default:
                console.log("\nVotre choix est invalide... !");
                MenuPrinciplae.MenuePRincipale()
        }
        this.patienter();
    }

    static patienter(): void {
        readline.question("\nAppuyez sur une touche pour continuer...");
    }
}
