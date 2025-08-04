"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incassable = void 0;
const Materiel_1 = require("./Materiel");
class Incassable extends Materiel_1.Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        return `Produit Matériel Incassable: ${this.getLibelle()} (${this.getPoids()}kg)`;
    }
    isCompatible() {
        return true;
    }
}
exports.Incassable = Incassable;
