"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routiere = void 0;
const Alimentaire_1 = require("./Alimentaire");
const Cargaison_1 = require("./Cargaison");
const Materiel_1 = require("./Materiel");
class Routiere extends Cargaison_1.Cargaison {
    constructor(distance = 0) {
        super(distance);
    }
    calculerMontant() {
        let total = 0;
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
        console.log(`Nombre de produits routiers : ${nombreProduits}`);
        console.log(`Montant total de la Cargaison Routiere: ${montant} FCFA`);
    }
}
exports.Routiere = Routiere;
