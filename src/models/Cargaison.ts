import { Produit } from "./Produit";

export abstract class Cargaison {
  private distance: number;
  private produits: Produit[] = [];

  public constructor(distance: number) {
    this.distance = distance;
  }

  public getDistance(): number {
    return this.distance;
  }

  public setDistance(distance: number): void {
    this.distance = distance;
  }

  public getProduits(): Produit[] {
    return this.produits;
  }

  public addProduit(produit: Produit): void {
  if (this.produits.length >= 10) {
    throw new Error("Une cargaison ne peut pas contenir plus de 10 produits.");
  }

  if (!produit.isCompatible(this)) {
    throw new Error(`Ce produit: ${produit.getLibelle()} ne peut pas être ajouté à une cargaison de type ${this.constructor.name}.`);
  }

  this.produits.push(produit);
}

  public nbproduit(): number{
      return this.produits.length
  }

  public abstract calculerMontant(): number

  public abstract sommeTotal(): number
  
  public abstract afficherMontantTotal(): void;

}
