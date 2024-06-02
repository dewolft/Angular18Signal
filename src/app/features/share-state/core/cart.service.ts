import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);
  itemInCart = computed(() => this.cart().length);
  cartIsEmpty = computed(() => this.itemInCart() === 0);
  totalCost = computed(() => this.cart().reduce((acc, p) => acc + p.cost, 0));

  addToCart(productToAdd: Product) {
    // Controllo se c'è l'elemento in carrello, se non è presente lo aggiungo
    let isInCart = this.cart().some(p => p.id === productToAdd.id) ;
    if (!isInCart) {
      this.cart.update(cart => [...cart, productToAdd])      
    }

  }

  removeFromCart(productToRemove: Product) {
    this.cart.update(cart => cart.filter(p => p.id !== productToRemove.id))
  }

  clearCart() {
    this.cart.set([])
  }

  constructor() { }

}
