import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AdminComponent } from './admin/admin.component';
import { BiletComponent } from './bilet/bilet.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdusComponent } from './produs/produs.component';
import { TurneuComponent } from './turneu/turneu.component';
import { TurneuapiService } from './turneuapi.service';
import { ProdusapiService } from './produsapi.service';
import { BiletapiService } from './biletapi.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BiletComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProdusComponent,
    TurneuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    ApiService,
    TurneuapiService,
    BiletapiService,
    ProdusapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
