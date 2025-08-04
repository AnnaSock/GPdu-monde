import { Cargaison } from "./Cargaison";
import { Maritime } from "./Maritime";
import { Produit } from "./Produit";

export class Chimique extends Produit {
  private degreToxicite: number = 0;

  constructor(libelle: string, poids: number, degreToxicite: number) {
    super(libelle, poids);
    this.setDegreToxicite(degreToxicite);
  }

   public setDegreToxicite(degreToxicite: number): void {
    if (degreToxicite < 1 || degreToxicite > 10) {
      throw new Error("Le degré de toxicité doit être compris entre 1 et 10.");
   }
  this.degreToxicite = degreToxicite;
  }

  public  getDegreToxicite(): number {
    return this.degreToxicite;
  }

  public info(): string {
    return `Produit Chimique: ${this.getLibelle()} (${this.getPoids()}kg), Toxicité: ${this.degreToxicite}`;
  }
  
  // maritime seulement

  public isCompatible(cargaison: Cargaison): boolean {
    if (cargaison instanceof Maritime) {
    return true;
  }
  return false;
  }
}
