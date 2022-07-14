import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TiendaComponent } from "./componentes/tienda/tienda.component";
import { HomeComponent } from "./componentes/home/home.component";

const appRoute : Routes = [
    {path: '', component: HomeComponent}

]

export const appRoutingProviders : any[]= [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);