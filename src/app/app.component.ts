import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsTableComponent } from './components/products-table/products-table.component';


@Component({
  selector: 'app-root',
  imports: [ProductsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent {
  title = 'gestion-productos';
}
