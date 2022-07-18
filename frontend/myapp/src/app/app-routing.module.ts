import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { IniciopanelComponent } from './componentes/iniciopanel/iniciopanel.component';
import { LoginComponent } from './componentes/login/login.component';
import { Page404Component } from './componentes/page404/page404.component';
import { PaneladminComponent } from './componentes/paneladmin/paneladmin.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'inicio', component: IniciopanelComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: Page404Component,pathMatch:'full'},
  {path: '', redirectTo: '/tienda', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
