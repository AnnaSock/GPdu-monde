import { Cargaison } from "./Cargaison"

export abstract class Produit{

    private libelle:string
    private poids: number


    public constructor(libelle:string, poids: number){
        this.libelle=libelle
        this.poids=poids
    }


    
}