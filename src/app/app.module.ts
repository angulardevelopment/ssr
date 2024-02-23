import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalObjectService } from './global-object.service';
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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [GlobalObjectService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
