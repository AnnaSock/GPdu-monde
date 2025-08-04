"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargaison = void 0;
class Cargaison {
    distance;
    produits = [];
    constructor(distance) {
        this.distance = distance;
    }
    getDistance() {
        return this.distance;
    }
    setDistance(distance) {
        this.distance = distance;
    }
    getProduits() {
        return this.produits;
    }
    addProduit(produit) {
        if (this.produits.length >= 10) {
            throw new Error("Une cargaison ne peut pas contenir plus de 10 produits.");
        }
        if (!produit.isCompatible(this)) {
            throw new Error(`Ce produit: ${produit.getLibelle()} ne peut pas être ajouté à une cargaison de type ${this.constructor.name}.`);
        }
        this.produits.push(produit);
    }
    nbproduit() {
        return this.produits.length;
    }
}
exports.Cargaison = Cargaison;
