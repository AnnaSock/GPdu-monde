"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragile = void 0;
const Aerienne_1 = require("./Aerienne");
const Materiel_1 = require("./Materiel");
const Routiere_1 = require("./Routiere");
class Fragile extends Materiel_1.Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        return `Produit Materiel Fragile: ${this.getLibelle()} (${this.getPoids()}kg)`;
    }
    isCompatible(cargaison) {
        if (cargaison instanceof Routiere_1.Routiere || cargaison instanceof Aerienne_1.Aerienne) {
            return true;
        }
        return false;
    }
}
exports.Fragile = Fragile;
