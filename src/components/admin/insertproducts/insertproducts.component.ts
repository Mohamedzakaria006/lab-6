import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../app/services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insertproducts',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './insertproducts.component.html',
  styleUrl: './insertproducts.component.css',
})
export class InsertproductsComponent implements OnInit {
  products: any;
  categories: any;
  product: any = {
    name: 'prod2',
    price: 80,
    category: 'electronics',
  };
  selectedOption: string = '';
  newProduct: any = {} as any;
  isEditing: boolean = false;

  constructor(private productSer: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productSer.getAllCategories().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });

    this.productSer.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  submitForm(item: any): void {
    if (!this.isEditing) {
      this.insertProduct();
    } else {
      this.editProduct(item);
    }
  }

  insertProduct(): void {
    this.productSer.addProduct(this.newProduct).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/cart']);
    });
  }

  deleteProduct(productID: string) {
    this.productSer.deleteProduct(productID).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

  startEditing(product: any) {
    this.isEditing = true;
    this.newProduct = { ...product };
  }

  editProduct(product: any) {
    this.productSer.updateProduct(product).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/cart']);
    });
  }
}
