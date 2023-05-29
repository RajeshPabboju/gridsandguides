import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateOrUpdateComponent } from './components/create-or-update/create-or-update.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'createOrUpdate', component: CreateOrUpdateComponent },
  { path: 'viewUser', component: ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
