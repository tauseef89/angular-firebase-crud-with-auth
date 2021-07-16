import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProductList().subscribe((res) => {
      this.products = res.map((e) => {
        return { id: e.payload.doc.id, ...(e.payload.doc.data() as Product) };
      });
    });
  }

  removeProduct(product: any) {
    this.productService.deleteProduct(product);
  }
}
