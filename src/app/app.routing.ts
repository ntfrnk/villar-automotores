import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { UsComponent } from "./pages/us/us.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProductComponent } from "./pages/product/product.component";
import { ServicesComponent } from "./pages/services/services.component";
import { MediaComponent } from "./pages/media/media.component";
import { ContactComponent } from "./pages/contact/contact.component";

const AppRoutes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'nosotros', component: UsComponent},
    {'path': 'productos', component: ProductsComponent},
    {'path': ':group/:product', component: ProductComponent},
    {'path': 'servicios', component: ServicesComponent},
    {'path': 'multimedia', component: MediaComponent},
    {'path': 'contacto', component: ContactComponent},
    {'path': '**', redirectTo: ''},
];

export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes);