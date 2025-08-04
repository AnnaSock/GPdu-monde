import { Cargaison } from "./Cargaison";

export abstract class Produit {
  private libelle: string;
  private poids: number;
  private cargaison?: Cargaison 

  public constructor(libelle: string, poids: number) {
    this.libelle = libelle;
    this.poids = poids;
  }

  public setCargaison(cargaison: Cargaison): void {
    this.cargaison = cargaison;
  }

  public getCargaison(): Cargaison | undefined{
    return this.cargaison;
  }

  public getLibelle(): string {
    return this.libelle;
  }

  public setLibelle(libelle: string): void {
    this.libelle = libelle;
  }

  public getPoids(): number {
    return this.poids;
  }

  public setPoids(poids: number): void {
    this.poids = poids;
  }

  public abstract info(): string;

  public abstract isCompatible(cargaison: Cargaison):boolean;
}
