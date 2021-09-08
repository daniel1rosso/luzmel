import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlService } from './service/url.service';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from '../app/components/index/index.component';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { ProdGuardService } from './guards/prod-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RolesService } from './service/roles.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartsModule } from 'ng2-charts';
import { ProductoComponent } from './components/producto/producto.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './components/producto/modificar-producto/modificar-producto.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { ModificarClienteComponent } from './components/cliente/modificar-cliente/modificar-cliente.component';
import { NuevoPresupuestoComponent } from './components/presupuesto/nuevo-presupuesto/nuevo-presupuesto.component';
import { DetallesPresupuestoComponent } from './components/detalles-presupuesto/detalles-presupuesto.component';
import { InformeComponent } from './components/informe/informe.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuevaClasificacionComponent } from './components/clasificacion/nueva-clasificacion/nueva-clasificacion.component';
import { ModificarClasificacionComponent } from './components/clasificacion/modificar-clasificacion/modificar-clasificacion.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NuevoUsuarioComponent,
    LoginComponent,
    IndexComponent,
    HomeComponent,
    HeaderComponent,
    ProductoComponent,
    NuevoProductoComponent,
    ModificarProductoComponent,
    ClasificacionComponent,
    PresupuestoComponent,
    ClienteComponent,
    NuevoClienteComponent,
    ModificarClienteComponent,
    NuevoPresupuestoComponent,
    DetallesPresupuestoComponent,
    InformeComponent,
    FooterComponent,
    NuevaClasificacionComponent,
    ModificarClasificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ChartsModule
  ],
  providers: [ DatePipe, UrlService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ProdInterceptorService,
    multi: true
  },ProdGuardService, RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
