import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public editForm: FormGroup;
  productRef: any;

  constructor(
    public productService: ProductService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      title: [''],
      price: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.productService.getProductDoc(id).subscribe((res) => {
      this.productRef = res;
      this.editForm = this.formBuilder.group({
        title: [this.productRef.title],
        price: [this.productRef.price],
        image: [this.productRef.image],
      });
    });
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.productService.updateProduct(this.editForm.value, id);
    this.router.navigate(['admin/products']);
  }
}
