
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { IndexComponent } from '../app/components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProdGuardService} from './guards/prod-guard.service';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './components/producto/modificar-producto/modificar-producto.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { ModificarClienteComponent } from './components/cliente/modificar-cliente/modificar-cliente.component';
import { NuevoPresupuestoComponent } from './components/presupuesto/nuevo-presupuesto/nuevo-presupuesto.component';
import { DetallesPresupuestoComponent } from './components/detalles-presupuesto/detalles-presupuesto.component';
import { InformeComponent } from './components/informe/informe.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { NuevaClasificacionComponent } from './components/clasificacion/nueva-clasificacion/nueva-clasificacion.component';
import { ModificarClasificacionComponent } from './components/clasificacion/modificar-clasificacion/modificar-clasificacion.component';
NuevaClasificacionComponent
const routes: Routes = [
  {path: 'index', component: IndexComponent },
  {path: 'productos', component:ProductoComponent, canActivate: [ProdGuardService]},
  {path: 'clientes', component:ClienteComponent, canActivate: [ProdGuardService]},
  {path: 'clasificaciones', component:ClasificacionComponent, canActivate: [ProdGuardService]},
  {path: 'presupuestos', component:PresupuestoComponent, canActivate: [ProdGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [ProdGuardService]},
  {path: 'login', component:LoginComponent},
  {path: '', component:LoginComponent},
  {path: 'auth/nuevo', component: NuevoUsuarioComponent, canActivate: [ProdGuardService]},
  {path: 'productos/nuevo', component:  NuevoProductoComponent, canActivate: [ProdGuardService]},
  {path: 'clientes/nuevo', component:  NuevoClienteComponent, canActivate: [ProdGuardService]},
  {path: 'clasificaciones/nuevo', component:  NuevaClasificacionComponent, canActivate: [ProdGuardService]},
  {path: 'presupuestos/nuevo', component:  NuevoPresupuestoComponent, canActivate: [ProdGuardService]},
  {path: 'presupuestos/detalles/:idPresupuesto', component: DetallesPresupuestoComponent, canActivate: [ProdGuardService]},
  {path: 'productos/modificar/:idProducto', component:  ModificarProductoComponent, canActivate: [ProdGuardService]},
  {path: 'clasificaciones/modificar/:idClasificacion', component:  ModificarClasificacionComponent, canActivate: [ProdGuardService]},
  {path: 'clientes/modificar/:idCliente', component:  ModificarClienteComponent, canActivate: [ProdGuardService]},
  {path: 'presupuestos/informe/:idPresupuesto', component:  InformeComponent, canActivate: [ProdGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
