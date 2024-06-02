// app.routes.ts
import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [

 { path: 'todolist', loadComponent: () => import('./features/todolist/todolist.component'),
 children: [
   { path: 'classic', loadComponent: () => import('./features/todolist/pages/classic/classic.component')},
   { path: 'signal', loadComponent: () => import('./features/todolist/pages/signal/signal.component')},
   { path: '', redirectTo: 'signal', pathMatch: 'full'}
 ]
 },
 {
    path: 'httpClient', loadComponent: () => import('./features/httpclient/httpclient.component'),
    data: { title: 'Hello Input Params'},
    children: [
      { path: 'http1', loadComponent: () => import('./features/httpclient/pages/http1/http1.component')},
      { path: 'http-signal', loadComponent: () => import('./features/httpclient/pages/http-signal/http-signal.component')},
      { path: 'http-rxjs', loadComponent: () => import('./features/httpclient/pages/http-rxjs/http-rxjs.component')},
      { path: '', redirectTo: 'http1', pathMatch: 'full'}
    ]
  },
  {
    path: 'uikit',
    canActivate: [authGuard], // <== controlla se la route è attivabile
    loadComponent: () => import('./features/uikit/uikit.component'),
    children: [ // <== attiva la possibilità di usare una router outlet dentro la route uikit
      { path: 'accordion', loadComponent: () => import('./features/uikit/pages/accordion-demo.component')},
      { path: 'alert', loadComponent: () => import('./features/uikit/pages/alert-demo.component')},
      { path: 'dropdown', loadComponent: () => import('./features/uikit/pages/dropdown-demo.component')},
      { path: 'phone', loadComponent: () => import('./features/uikit/pages/phone-demo.component')},
      { path: 'timeline', loadComponent: () => import('./features/uikit/pages/timeline-demo.component')},
      { path: 'variant-icon', loadComponent: () => import('./features/uikit/pages/variant-icon-demo.component')},
      { path: '', redirectTo: 'accordion', pathMatch: 'full'}
    ]
  },

  {
    path: 'share-state',
    canActivate: [authGuard], // <== controlla se la route è attivabile
    loadComponent: () => import('./features/share-state/share-state.component'),
    children: [ // <== attiva la possibilità di usare una router outlet dentro la route uikit
      { path: 'home', loadComponent: () => import('./features/share-state/pages/home/home.component')},
      { path: 'settings', loadComponent: () => import('./features/share-state/pages/settings/settings.component')},
      { path: 'cart', loadComponent: () => import('./features/share-state/pages/cart/cart.component')},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },  

  //{ path: 'product/:productId', loadComponent: () => import('./features/product/product.component') },
  { path: '', redirectTo: 'share-state', pathMatch: 'full'}
];

// pathMatch: 'full' < indica che il path deve essere esattamente uguale alla rotta
// patchmatch: 'prefix' < indica che il path deve iniziare con la rotta (di default, se non specificato)
// loadComponent: () => import('./features/demo1/demo1.component') < esegue la lazy loading del componente. Funziona solo se mettiamo nel component il default component sull'export "export default class Demo1Component" 

//{
//    path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component'),
//    data: { title: 'Hello Demo 1'}
//  },