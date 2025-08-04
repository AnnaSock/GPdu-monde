import { Maritime } from "./models/Maritime";
import { Aerienne } from "./models/Aerienne";
import { Routiere } from "./models/Routiere";

import { Alimentaire } from "./models/Alimentaire";
import { Fragile } from "./models/Fragile";
import { Chimique } from "./models/Chimique";
import { Incassable } from "./models/Incassable";

// Cargaisons
const cargaisonMaritime = new Maritime(30);
const cargaisonRoutiere = new Routiere(10);
const cargaisonAerienne = new Aerienne(15);

// Produits
const acide = new Chimique("Acide", 50, 5);
console.log(acide.info())
const gaz = new Chimique("Gaz toxique", 40, 8);

const tomates = new Alimentaire("Tomates", 100);
console.log(tomates.info())
const riz = new Alimentaire("Riz", 200);

const vase = new Fragile("Vase en verre", 10);
console.log(vase.info())
const tablette = new Fragile("Tablette tactile", 5);

const gobelet = new Incassable('gobelet incassable', 1)
console.log(gobelet.info())

// Ajout de cargaison aerienne sans l'objet de type Chimique
cargaisonAerienne.addProduit(tomates);
cargaisonAerienne.addProduit(riz);
cargaisonAerienne.addProduit(vase);
cargaisonAerienne.addProduit(tablette);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.addProduit(gobelet);
cargaisonAerienne.afficherMontantTotal()

// Ajout de cargaison routiere sans l'objet de type chimique
cargaisonRoutiere.addProduit(tomates);
cargaisonRoutiere.addProduit(riz);
cargaisonRoutiere.addProduit(vase);
cargaisonRoutiere.addProduit(tablette);
cargaisonRoutiere.addProduit(gobelet);
cargaisonRoutiere.addProduit(tablette);
cargaisonRoutiere.afficherMontantTotal()

// Ajout de cargaison maritime tous les produits sont autorisés sauf les fragiles
cargaisonMaritime.addProduit(acide);
cargaisonMaritime.addProduit(gaz);
cargaisonMaritime.addProduit(tomates);
cargaisonMaritime.addProduit(riz);
cargaisonMaritime.addProduit(gobelet);
cargaisonMaritime.afficherMontantTotal();


