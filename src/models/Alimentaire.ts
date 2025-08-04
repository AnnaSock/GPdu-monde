import { Cargaison } from "./Cargaison";
import { Produit } from "./Produit";

export class Alimentaire extends Produit{
    
    
    constructor(libelle: string, poids: number) {
    super(libelle, poids);
  }

  public info(): string {
    return `Produit Alimentaire: ${this.getLibelle()} (${this.getPoids()}kg)`;
  }

  // peut etre transporter par tous les voies

  public isCompatible(): boolean {
      return true
  }

   
 
}