/**
 * Représente un produit standard avec un ID, un nom, un prix et une quantité.
 */
 export class Produit {
    /**
     * Crée une nouvelle instance de Produit.
     * @param id L'identifiant unique du produit.
     * @param nom Le nom du produit.
     * @param prix Le prix unitaire du produit.
     * @param quantite La quantité en stock du produit.
     */
    constructor(public id: number, public nom: string, public prix: number, public quantite: number) {}
  
    /**
     * Retourne une chaîne de caractères qui représente le produit.
     */
    toString(): string {
      return `${this.nom} (id: ${this.id}), prix: ${this.prix}€, quantité: ${this.quantite}`;
    }
  }
  