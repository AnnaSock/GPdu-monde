"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chimique = void 0;
const Maritime_1 = require("./Maritime");
const Produit_1 = require("./Produit");
class Chimique extends Produit_1.Produit {
    degreToxicite = 0;
    constructor(libelle, poids, degreToxicite) {
        super(libelle, poids);
        this.setDegreToxicite(degreToxicite);
    }
    setDegreToxicite(degreToxicite) {
        if (degreToxicite < 1 || degreToxicite > 10) {
            throw new Error("Le degré de toxicité doit être compris entre 1 et 10.");
        }
        this.degreToxicite = degreToxicite;
    }
    getDegreToxicite() {
        return this.degreToxicite;
    }
    info() {
        return `Produit Chimique: ${this.getLibelle()} (${this.getPoids()}kg), Toxicité: ${this.degreToxicite}`;
    }
    // maritime seulement
    isCompatible(cargaison) {
        if (cargaison instanceof Maritime_1.Maritime) {
            return true;
        }
        return false;
    }
}
exports.Chimique = Chimique;
