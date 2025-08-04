import { Aerienne } from "./Aerienne";
import { Cargaison } from "./Cargaison";
import { Materiel } from "./Materiel";
import { Routiere } from "./Routiere";

export class Fragile extends Materiel{
    
    
    constructor(libelle: string, poids: number) {
    super(libelle, poids);
    }

  public info(): string {
    return `Produit Materiel Fragile: ${this.getLibelle()} (${this.getPoids()}kg)`;
  }

  public isCompatible(cargaison: Cargaison): boolean {
    if (cargaison instanceof Routiere || cargaison instanceof Aerienne) {
    return true;
  }
  return false;
    
  }
}