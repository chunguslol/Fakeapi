import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormCreateComponent } from './components/product-form-create/product-form-create.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductFormCreateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
