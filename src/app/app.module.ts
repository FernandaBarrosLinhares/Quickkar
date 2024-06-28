import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FormularioComponent } from './componetes/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './component/card/layout/layout.component';
import { CardLayoutComponent } from './component/card-layout/card-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { TesteComponent } from './componet/teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    BannerComponent,
    FormularioComponent,
    LayoutComponent,
    CardLayoutComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
