import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/model';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})


export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,  
    private productService: ProductService  
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data; 
      },
      error: (err) => {
        console.error('Error al obtener el producto:', err); 
      },
    });
  }
  
}