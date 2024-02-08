import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Page4o4Component } from './page4o4/page4o4.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: Page4o4Component, title: 'Not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
