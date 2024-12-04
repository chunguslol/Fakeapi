import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/model'; 

@Component({
  selector: 'app-product-form-create',
  imports: [CommonModule, FormsModule, RouterModule],  
  templateUrl: './product-form-create.component.html',
  styleUrls: ['./product-form-create.component.css']
})
export class ProductFormCreateComponent implements OnInit {
  product: Product = { 
    id: 0,  
    title: '', 
    category: '', 
    price: 0, 
    image: '', 
    description: ''  
  };

  constructor(
    private router: Router, 
    private productService: ProductService  
  ) {}

  ngOnInit(): void {
    
  }

  onCancel(): void {
    this.router.navigate(['/products']);  
  }

  onSubmit(): void {
    this.productService.createProduct(this.product).subscribe({
      next: () => {
        console.log('Producto creado con éxito:', this.product);
        this.router.navigate(['/products']);  
      },
      error: (err) => {
        console.error('Error al crear el producto:', err);
      }
    });
  }
}
