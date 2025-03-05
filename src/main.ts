import { MenuPrinciplae } from "./ui/MenuePrincipale";

let quitter: boolean = true;

while (quitter) {
    MenuPrinciplae.MenuePRincipale();
    let choix: string = MenuPrinciplae.choix();
    if (choix == "2") break;
    MenuPrinciplae.traiterChoix(parseInt(choix));
}
