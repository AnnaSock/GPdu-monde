"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maritime_1 = require("./models/Maritime");
const Aerienne_1 = require("./models/Aerienne");
const Routiere_1 = require("./models/Routiere");
const Alimentaire_1 = require("./models/Alimentaire");
const Fragile_1 = require("./models/Fragile");
const Chimique_1 = require("./models/Chimique");
const Incassable_1 = require("./models/Incassable");
// Cargaisons
const cargaisonMaritime = new Maritime_1.Maritime(30);
const cargaisonRoutiere = new Routiere_1.Routiere(10);
const cargaisonAerienne = new Aerienne_1.Aerienne(15);
// Produits
const acide = new Chimique_1.Chimique("Acide", 50, 5);
console.log(acide.info());
const gaz = new Chimique_1.Chimique("Gaz toxique", 40, 8);
const tomates = new Alimentaire_1.Alimentaire("Tomates", 100);
console.log(tomates.info());
const riz = new Alimentaire_1.Alimentaire("Riz", 200);
const vase = new Fragile_1.Fragile("Vase en verre", 10);
console.log(vase.info());
const tablette = new Fragile_1.Fragile("Tablette tactile", 5);
const gobelet = new Incassable_1.Incassable('gobelet incassable', 1);
console.log(gobelet.info());
// Ajout de cargaison aerienne sans l'objet de type Chimique
cargaisonAerienne.addProduit(tomates);
cargaisonAerienne.addProduit(riz);
cargaisonAerienne.addProduit(vase);
cargaisonAerienne.addProduit(tablette);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.afficherMontantTotal();
// Ajout de cargaison routiere sans l'objet de type chimique
cargaisonRoutiere.addProduit(tomates);
cargaisonRoutiere.addProduit(riz);
cargaisonRoutiere.addProduit(vase);
cargaisonRoutiere.addProduit(tablette);
cargaisonRoutiere.addProduit(gobelet);
cargaisonRoutiere.addProduit(tablette);
cargaisonRoutiere.afficherMontantTotal();
// Ajout de cargaison maritime tous les produits sont autorisés sauf les fragiles
cargaisonMaritime.addProduit(acide);
cargaisonMaritime.addProduit(gaz);
cargaisonMaritime.addProduit(tomates);
cargaisonMaritime.addProduit(riz);
cargaisonMaritime.addProduit(gobelet);
cargaisonMaritime.afficherMontantTotal();
