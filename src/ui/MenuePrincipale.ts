import * as readline from "readline-sync";
import { CoursConsole } from "./CoursConsole";

  export class MenuPrinciplae{

     static  MenuePRincipale () {

        console.log("==== Gestion de Rendez-vous ====")
        console.log("\n1 - Gérer Les Cours ")
        console.log("\n2 - Gérer les Filiere")
        console.log("\n3 - Gérer les Classes")
        console.log("\n3 - Gérer les Niveaux")
        console.log("\n4 - Quitter -->")
}

    static choix() : string {
        return readline.question("\nVotre choix : ");
    }
    
    static traiterChoix(choix:number): void {
        switch (choix) {
            case 1:
                CoursConsole.menuCours;
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
            default: console.log("\nVotre choix est invalide... !")
        }
    }
    static patienter(): string {
        let gogo = readline.question("\nAppuyer pour continuer : ");
        return gogo
    }
}
