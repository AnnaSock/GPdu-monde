import { Alimentaire } from "./Alimentaire";
import { Cargaison } from "./Cargaison";
import { Materiel } from "./Materiel";

export class Routiere extends Cargaison {
  constructor(distance: number=0) {
    super(distance);
  }

  public calculerMontant(): number {
    let total = 0;
    for (const p of this.getProduits()) {
      if (p instanceof Alimentaire) {
        total += 100 * p.getPoids() * this.getDistance();
      } else if (p instanceof Materiel) {
        total += 200 * p.getPoids() * this.getDistance();
      }
    }
    return total;
  }

  public sommeTotal(){
    return this.calculerMontant()
  }
 
  public afficherMontantTotal(): void {
  const montant = this.sommeTotal();
  const nombreProduits = this.nbproduit();
  console.log(`Nombre de produits routiers : ${nombreProduits}`);
  console.log(`Montant total de la Cargaison Routiere: ${montant} FCFA`);
 }

}