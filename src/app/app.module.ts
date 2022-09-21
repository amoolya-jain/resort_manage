import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CaroComponent } from './caro/caro.component';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';
import { Cards1Component } from './cards1/cards1.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CaroComponent,
    CardsComponent,
    TablesComponent,
    Cards1Component,
    RegisterComponent,
    AdvertisementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
