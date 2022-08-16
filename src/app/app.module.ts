import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalObjectService } from './global-object.service';
import { AppRoutingModule } from './app-routing.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule
  ],
  providers: [GlobalObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
