import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Page4o4Component } from './page4o4/page4o4.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: Page4o4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
