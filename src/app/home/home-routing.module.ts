import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FurnitureComponent } from './furniture/furniture.component';

const routes: Routes = [
  {
    path: 'home',
    component: FurnitureComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
