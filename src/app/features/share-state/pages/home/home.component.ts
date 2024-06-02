// features/home/home.component.ts
import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Product } from '../../model/product';
import { CartService } from '../../core/cart.service';
import { SettingsService } from '../../core/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
      <div class="flex gap-6 justify-center">
        @for (product of products(); track product.id) {
            <div class="card w-full bg-base-100 shadow-xl">
                <figure><img [src]="product.image" [alt]="product.name" /></figure>
                <div class="card-body">
                    <div class="flex justify-between">
                      <h2 
                        class="card-title"
                        [style.color]="settingsService.config().color"
                      >{{product.name}}</h2>
                      <div class="card-title">€ {{product.cost}}</div>
                    </div>
                    <p>{{product.description}}</p>
                    <div class="card-actions justify-end">
                        @if (settingsService.isShopEnabled()) {
                            <button
                              class="btn btn-primary"
                              (click)="cartService.addToCart(product)"
                            >
                                Add to Cart
                            </button>
                        }
                    </div>
                </div>
            </div>
        }
      </div>
    
    <pre>{{cartService.cart() | json}}</pre>
  `,
  styles: ``
})
export default class HomeComponent {
  products = signal<Product[]>(initialState);
  cartService = inject(CartService);
  settingsService = inject(SettingsService);
}

const initialState: Product[] =[
  {
    id: 1,
    name: "T-Shirt",
    image: "assets/images/img1.png",
    description: "lorem...",
    cost: 10
  },
  {
    id: 2,
    name: "Bullet",
    description: "lorem...",
    image: "assets/images/img2.png",
    cost: 5
  },
  {
    id: 3,
    name: "Pic",
    description: "lorem...",
    image: "assets/images/img3.png",
    cost: 2
  }
]
