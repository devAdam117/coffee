import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fixed/header/header.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './fixed/footer/footer.component';
import { routingComponents } from './app-routing.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { RezervacieComponent } from './routing/rezervacie/rezervacie.component';
import { GaleriaComponent } from './routing/galeria/galeria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    RezervacieComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MaterialModule ,
    BrowserAnimationsModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
