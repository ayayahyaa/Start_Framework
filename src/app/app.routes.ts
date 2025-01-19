import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent,title: 'home page'},
  {path:'about', component:AboutComponent, title:'about page'},
  {path: 'portfolio', component:PortfolioComponent,title: 'portfolio page'},
  {path:'contact', component:ContactComponent, title:'contact page'},
  {path: '**', component: NotfoundpageComponent,title: 'notfound page'}
];

