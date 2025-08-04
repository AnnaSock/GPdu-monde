"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materiel = void 0;
const Produit_1 = require("./Produit");
class Materiel extends Produit_1.Produit {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        return `Produit Matériel: ${this.getLibelle()} (${this.getPoids()}kg)`;
    }
}
exports.Materiel = Materiel;
