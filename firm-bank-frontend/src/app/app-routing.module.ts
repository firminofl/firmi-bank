import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './components/account/extract/extract.component';

const routes: Routes = [
  {
    path: '',
    component: ExtractComponent
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
