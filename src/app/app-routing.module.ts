import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaroComponent } from './caro/caro.component';
import { CardsComponent } from './cards/cards.component';
import { Cards1Component } from './cards1/cards1.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  { path:'cards1',component:Cards1Component},
  {path:'review',component:ReviewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
