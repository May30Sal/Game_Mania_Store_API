import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pastas/home/home.component';
import { ContatoComponent } from './pastas/contato/contato.component';
import { MonteSeuPcComponent } from './pastas/monte-seu-pc/monte-seu-pc.component';
import { HeaderComponent } from './pastas/header/header.component';
import { GaleriaComponent } from './pastas/galeria/galeria.component';
import { SobreComponent } from './pastas/sobre/sobre.component';
import { FooterComponent } from './pastas/footer/footer.component';
import { LoginComponent } from './pastas/login/login.component';
import { NotfoundComponent } from './pastas/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    MonteSeuPcComponent,
    HeaderComponent,
    GaleriaComponent,
    SobreComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
