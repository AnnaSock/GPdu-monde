"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
class Produit {
    libelle;
    poids;
    cargaison;
    constructor(libelle, poids) {
        this.libelle = libelle;
        this.poids = poids;
    }
    setCargaison(cargaison) {
        this.cargaison = cargaison;
    }
    getCargaison() {
        return this.cargaison;
    }
    getLibelle() {
        return this.libelle;
    }
    setLibelle(libelle) {
        this.libelle = libelle;
    }
    getPoids() {
        return this.poids;
    }
    setPoids(poids) {
        this.poids = poids;
    }
}
exports.Produit = Produit;
