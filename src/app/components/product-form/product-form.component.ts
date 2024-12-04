import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';  // Asegúrate de que el servicio esté correctamente importado
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel
import { CommonModule } from '@angular/common'; // Importa CommonModule si estás utilizando ngIf, ngFor, etc.
import { RouterModule } from '@angular/router';
import { Product } from '../../models/model';  // El modelo de producto

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule, RouterModule],  // Asegúrate de incluir los módulos aquí
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product | null = null; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService  
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(Number(productId));  // Llamar a la función para cargar el producto
    }
  }

  loadProduct(id: number): void {
    // Llamamos al servicio para obtener el producto con el id
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;  // Asignamos el producto recibido
      },
      error: (err) => {
        console.error('Error al obtener el producto:', err);
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }

  onSubmit(): void {
    
    if (this.product) {
      this.productService.updateProduct(this.product.id, this.product).subscribe({
        next: () => {
          console.log('Producto editado con éxito:', this.product); 
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error('Error al editar el producto:', err); 
        }
      });
    } else {
      console.error('No se pudo editar el producto porque no está definido.');
    }
  }
  
  
  
}
