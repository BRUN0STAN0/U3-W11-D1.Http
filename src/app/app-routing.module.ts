import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index/index.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index',
  },
  {
    path: 'index',
    component: IndexPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
