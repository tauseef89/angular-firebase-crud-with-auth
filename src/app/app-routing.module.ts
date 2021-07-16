import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products',
        component: ProductListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'edit-product/:id',
        component: EditProductComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
