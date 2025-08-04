"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aerienne = void 0;
const Alimentaire_1 = require("./Alimentaire");
const Cargaison_1 = require("./Cargaison");
const Materiel_1 = require("./Materiel");
class Aerienne extends Cargaison_1.Cargaison {
    constructor(distance = 0) {
        super(distance);
    }
    calculerMontant() {
        let total = 5000;
        for (const p of this.getProduits()) {
            if (p instanceof Alimentaire_1.Alimentaire) {
                total += 100 * p.getPoids() * this.getDistance();
            }
            else if (p instanceof Materiel_1.Materiel) {
                total += 200 * p.getPoids() * this.getDistance();
            }
        }
        return total;
    }
    sommeTotal() {
        return this.calculerMontant();
    }
    afficherMontantTotal() {
        const montant = this.sommeTotal();
        const nombreProduits = this.nbproduit();
        console.log(`Nombre de produits aériens : ${nombreProduits}`);
        console.log(`Montant total de la Cargaison Aérienne: ${montant} FCFA`);
    }
}
exports.Aerienne = Aerienne;
