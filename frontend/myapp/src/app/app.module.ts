import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClient,HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { PaneladminComponent } from './componentes/paneladmin/paneladmin.component';
import { LoginComponent } from './componentes/login/login.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaneladminComponent,
    LoginComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
