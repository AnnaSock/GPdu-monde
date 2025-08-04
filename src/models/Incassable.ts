import { Materiel } from "./Materiel";

export class Incassable extends Materiel{
    
    
    constructor(libelle: string, poids: number) {
    super(libelle, poids);
  }

  public info(): string {
    return `Produit Matériel Incassable: ${this.getLibelle()} (${this.getPoids()}kg)`;
  }

  public isCompatible(): boolean {
     return true
  }
}