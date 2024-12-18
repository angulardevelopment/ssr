import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalObjectService } from './services/global-object.service';
import { AppRoutingModule } from './app-routing.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    ItemsComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
// If you need to set an ID use the APP_ID InjectionToken :
// { provide: APP_ID,  useValue: 'serverApp' }.
// NB: If you bootstrap only one Angular app on your page, you can just remove it. Specifying is only necessary when you have multiple angular apps.
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  // providers: [GlobalObjectService,],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
