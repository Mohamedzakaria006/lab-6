import { Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { InsertproductsComponent } from '../components/admin/insertproducts/insertproducts.component';
import { CartComponent } from '../components/cart/cart.component';
import { HomeComponent } from '../components/home/home.component';
import { authGuard } from './Guard/auth.guard';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
  /*
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
  */
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'addProduct',
        component: InsertproductsComponent,
        canActivate: [authGuard],
      },
    ],
  },
];
