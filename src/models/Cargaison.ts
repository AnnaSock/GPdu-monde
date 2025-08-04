import { Produit } from "./Produit"

export abstract class Cargaison{

    private distance: number
    private frais: number
    private montant: number
    private produits: Produit[]=[]

    public constructor(distance: number, frais:number, montant: number){
        this.distance=distance
        this.frais=frais
        this.montant=montant
    }
}



