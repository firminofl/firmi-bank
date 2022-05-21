import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/account/account.module').then(
      (mod) => mod.AccountModule
    )
  },
  {
    path: 'account',
    loadChildren: () => import('./components/account/account.module').then(
      (mod) => mod.AccountModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
