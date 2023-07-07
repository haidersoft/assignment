import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component'

const routes: Routes = [
   { path: '', component: LoginComponent }, // Home component route
   { path: 'transaction', component: TransactionComponent }, // Dashboard component route];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
