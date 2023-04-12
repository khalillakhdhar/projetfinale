import { Produit } from "./Produit";


/**
 * Représente un produit en promotion avec un pourcentage de réduction sur le prix unitaire.
 */
export class ProduitSolde extends Produit {
  /**
   * Crée une nouvelle instance de ProduitSolde.
   * @param id L'identifiant unique du produit.
   * @param nom Le nom du produit.
   * @param prix Le prix unitaire du produit.
   * @param quantite La quantité en stock du produit.
   * @param pourcentageReduction Le pourcentage de réduction sur le prix unitaire (entre 0 et 1).
   */
  constructor(id: number, nom: string, prix: number, quantite: number, public pourcentageReduction: number) {
    super(id, nom, prix, quantite);
  }

  /**
   * Retourne le prix soldé du produit.
   */
  get prixSolde(): number {
    return this.prix * (1 - this.pourcentageReduction);
  }

  /**
   * Retourne une chaîne de caractères qui représente le produit soldé.
   */
  toString(): string {
    return super.toString() + `, prix soldé: ${this.prixSolde}€ (-${this.pourcentageReduction * 100}%)`;
  }
}
