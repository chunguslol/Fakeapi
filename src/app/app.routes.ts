import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsTableComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'products/new', component: ProductFormComponent },
    { path: 'products/:id/edit', component: ProductFormComponent }
  ];
