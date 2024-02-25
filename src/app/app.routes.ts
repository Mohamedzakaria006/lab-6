import { Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { InsertproductsComponent } from '../components/admin/insertproducts/insertproducts.component';
import { CartComponent } from '../components/cart/cart.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'addProduct', component: InsertproductsComponent }],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
