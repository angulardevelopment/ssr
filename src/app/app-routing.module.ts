import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { ItemsComponent } from './items/items.component';
import { RenderMode, ServerRoute } from '@angular/ssr';



export const routeConfig: Routes = [
  { path: 'heroes', component: NewComponentComponent },
  { path: 'ItemsComponent', component: ItemsComponent }
];

export const serverRouteConfig: ServerRoute[] = [
  { path: '/login', renderMode: RenderMode.Server },
  { path: '/dashboard', renderMode: RenderMode.Client },
  { path: '/**', renderMode: RenderMode.Prerender },
];

// export const routeConfig: ServerRoute[] = [{
//   path: '/product/:id',
//   renderMode: RenderMode.Prerender,
//   // getPrerenderParams
//   async getPrerenderPaths() {
//     const dataService = inject(ProductService);
//     const ids = await dataService.getIds(); // ["1", "2", "3"]
//     return ids.map(id => ({ id })); // `id` is used in place of `:id` in the route path.
//    },
//  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig)
  ]
})
export class AppRoutingModule { }
