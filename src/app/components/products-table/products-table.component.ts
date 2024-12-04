import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/model';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number): void {
    const productToDelete = this.products.find(p => p.id === id);

    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);

      if (productToDelete) {
        console.log(`Producto eliminado: ID=${productToDelete.id}, Título=${productToDelete.title}`);
      } else {
        console.log(`No se encontró el producto con ID=${id}`);
      }
    });
  }
}
