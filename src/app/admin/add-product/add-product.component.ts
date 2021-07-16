import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public productForm: FormGroup;

  constructor(
    public productService: ProductService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.productForm = this.formBuilder.group({
      title: [''],
      price: [''],
      image: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.productService.createProduct(this.productForm.value);
    this.router.navigate(['admin/products']);
  }
}
