import { Routes } from '@angular/router';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormCreateComponent } from './components/product-form-create/product-form-create.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsTableComponent },
  { path: 'products/create', component: ProductFormCreateComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: 'products/:id', component: ProductDetailComponent }
];
