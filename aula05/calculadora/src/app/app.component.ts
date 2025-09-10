import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent} from './principal/principal.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PrincipalComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}
