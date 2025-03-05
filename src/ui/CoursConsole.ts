import * as readline from "readline-sync";
import { MenuPrinciplae } from "./MenuePrincipale";


  export class CoursConsole{

    
    static menuCours (): void {
      console.clear()
      console.log("1 - Lister Cours");
      console.log("\n2 - Créer un Cours");
      MenuPrinciplae.patienter();
  }



   }