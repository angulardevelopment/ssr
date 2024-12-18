import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { ItemsComponent } from './items/items.component';

export const routeConfig: Routes = [
  { path: 'heroes', component: NewComponentComponent },
  { path: 'ItemsComponent', component: ItemsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig)
  ]
})
export class AppRoutingModule { }
