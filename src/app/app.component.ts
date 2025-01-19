import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundpageComponent } from "./notfoundpage/notfoundpage.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, HomeComponent, PortfolioComponent, ContactComponent, FooterComponent, NavbarComponent, NotfoundpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstframework';
}
