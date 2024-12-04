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
    private route: ActivatedRoute,  // Para obtener el ID desde la URL
    private productService: ProductService  // Para obtener el producto desde el servicio
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtener el ID desde la URL
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;  // Asignar el producto obtenido
      },
      error: (err) => {
        console.error('Error al obtener el producto:', err);  // Manejar errores
      },
    });
  }
}