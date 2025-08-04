import { Alimentaire } from "./Alimentaire";
import { Cargaison } from "./Cargaison";
import { Chimique } from "./Chimique";
import { Materiel } from "./Materiel";
import { Produit } from "./Produit";

export class Maritime extends Cargaison {
  constructor(distance: number=0) {
    super(distance); 
  }

 public calculerMontant(): number {
    let total = 15000;

    for (const p of this.getProduits()) {
      if (p instanceof Alimentaire) {
        total += 90 * p.getPoids() * this.getDistance();
      } else if (p instanceof Materiel) {
        total += 400 * p.getPoids() * this.getDistance();
      } else if (p instanceof Chimique) {
        total += 500 * p.getPoids() * p.getDegreToxicite();
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
  console.log(`Nombre de produits maritimes : ${nombreProduits}`);
  console.log(`Montant total de la Cargaison Maritime: ${montant} FCFA`);
 }
}