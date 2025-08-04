"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maritime = void 0;
const Alimentaire_1 = require("./Alimentaire");
const Cargaison_1 = require("./Cargaison");
const Chimique_1 = require("./Chimique");
const Materiel_1 = require("./Materiel");
class Maritime extends Cargaison_1.Cargaison {
    constructor(distance = 0) {
        super(distance);
    }
    calculerMontant() {
        let total = 6000;
        for (const p of this.getProduits()) {
            if (p instanceof Alimentaire_1.Alimentaire) {
                total += 90 * p.getPoids() * this.getDistance();
            }
            else if (p instanceof Materiel_1.Materiel) {
                total += 400 * p.getPoids() * this.getDistance();
            }
            else if (p instanceof Chimique_1.Chimique) {
                total += 500 * p.getPoids() * p.getDegreToxicite();
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
        console.log(`Nombre de produits maritimes : ${nombreProduits}`);
        console.log(`Montant total de la Cargaison Maritime: ${montant} FCFA`);
    }
}
exports.Maritime = Maritime;
