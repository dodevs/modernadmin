import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as $ from 'jquery';
import { UiModule } from './ui/ui.module';
import { SharedModule } from './shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
