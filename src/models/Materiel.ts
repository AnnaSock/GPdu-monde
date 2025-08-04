import { Cargaison } from "./Cargaison";
import { Produit } from "./Produit";

export abstract class Materiel extends Produit{
    
    
    constructor(libelle: string, poids: number) {
    super(libelle, poids);
  }

  public info(): string {
    return `Produit Matériel: ${this.getLibelle()} (${this.getPoids()}kg)`;
  }

  // peut etre transporter par tous les voies
  public abstract isCompatible(cargaison: Cargaison): boolean 
}