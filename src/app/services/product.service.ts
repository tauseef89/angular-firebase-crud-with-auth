import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private afs: AngularFirestore) {}

  getProductDoc(id: any) {
    return this.afs.collection('products').doc(id).valueChanges();
  }

  getProductList() {
    return this.afs.collection('products').snapshotChanges();
  }

  createProduct(product: Product) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('products')
        .add(product)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteProduct(product: any) {
    return this.afs.collection('products').doc(product.id).delete();
  }

  updateProduct(product: Product, id: any) {
    return this.afs.collection('products').doc(id).update({
      title: product.title,
      price: product.price,
      image: product.image,
    });
  }
}
