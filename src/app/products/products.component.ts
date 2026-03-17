import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productList: any[] | undefined;
  errorMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  get products() {
    return this.productList;
  }

  addNewProduct(newProduct: any) {
    this.productService.addProduct(newProduct).subscribe({
      next: (response) => {},
      error: (err) => {
        console.log('Error in adding product');
      },
      complete: () => {
        console.log('New product added.');
      },
    });
  }

  updateProduct(updateId: number, toUpdate: any) {
    this.productService.updateProduct(updateId, toUpdate).subscribe({
      next: (response) => {
        // console.log('Product successfully updated.');
      },
      error: (err) => {
        console.log('Error in updating product.');
      },
      complete: () => {
        console.log('Product updated.');
      },
    });
  }

  deleteProduct(deleteId: number) {
    this.productService.deleteProduct(deleteId).subscribe({
      next: (response) => {
        // console.log('Product successfully deleted.');
      },
      error: (err) => {
        console.log('Error in deleting product.');
      },
      complete: () => {
        console.log('Product deleted.');
      },
    });
  }

  fetchProducts() {
    this.productService.getProducts().subscribe({
      next: (val) => {
        this.productList = val.products;
      },
      error: (err) => {
        this.errorMessage = err.message;
        console.log(err);
        console.log('Error in fetching products');
      },
    });
  }
}
