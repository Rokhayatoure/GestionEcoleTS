import * as readline from "readline-sync";

export class Classeui{

   static afficherMenu(){
        console.log("=== Gestion Scolaire");
        console.log("\n 1- Ajouter un élève");
        console.log("\n 2- Quitter");
    }

    static choix():string{
        return readline.question("\n Votre choix: ");
    }

    static traiterChoix(choix: number):void{
        switch (choix) {
            case 1:
                this.menuClasse()
                break;
        
            default:
                break;
        }
    }

    static menuClasse():void{
        console.clear();
        console.log("\n liste des classes");
        console.log("\n Ajouter classe");
        this.patienter();
        
    }
    static patienter(): string {
        let gogo = readline.question("\nAppuyer pour continuer : ");
        return gogo
    }


}