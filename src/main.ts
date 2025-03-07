import { Classeui } from "./ui/Classeui";

let quitter:boolean = true;

while(quitter){
  Classeui.afficherMenu();
  let choix: string = Classeui.choix();
  if(choix == "2") break;
  Classeui.traiterChoix(parseInt(choix));
}