import { Produit } from "./Produit";
import { ProduitSimple } from "./produitSimple";
import { ProduitSolde } from "./produitSolde";

/**
 * Gère une liste de produits en mémoire.
 */
export class GestionProduits {
  private produits: Produit[] = [];

  /**
   * Crée une nouvelle instance de GestionProduits et initialise la liste des produits avec quelques exemples.
   */
  constructor() {
    this.initialiserExemples();
  }

  /**
   * Ajoute un produit à la liste.
   * @param produit Le produit à ajouter.
   */
  ajouterProduit(produit: Produit): void {
    this.produits.push(produit);
  }

  /**
   * Affiche la liste des produits dans la console.
   */
  listerProduits(): void {
    console.log("Liste des produits :");
    this.produits.forEach((produit) => console.log(produit.toString()));
    }
  
    /**
     * Initialise la liste des produits avec quelques exemples.
     */
    private initialiserExemples(): void {
      this.ajouterProduit(new ProduitSimple(1, "Ordinateur portable", 899, 10));
      this.ajouterProduit(new ProduitSolde(2, "Télévision", 499, 5, 0.2));
    }
  }
  