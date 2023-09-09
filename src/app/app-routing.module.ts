import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { StartFrameworckComponent } from './start-frameworck/start-frameworck.component';

const routes: Routes = [
  {path:'' , redirectTo:"startFrameworck" , pathMatch:"full" ,title:"Home"},
  {path:"startFrameworck" , component:StartFrameworckComponent ,title:"Home"},
  {path:"about" , component:AboutComponent ,title:"about"},
  {path:"portfolio" , component:PortfolioComponent ,title:"portfolio"},
  {path:"contact" , component:ContactComponent ,title:"contact"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
