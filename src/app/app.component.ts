import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from "./home/footer/footer.component";
import { SidebarComponent } from "./home/sidebar/sidebar.component";
import { SidenavResponsiveExampleComponent } from './mui/sidenav-responsive-example/sidenav-responsive-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, 
    //SidebarComponent,
    SidenavResponsiveExampleComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
