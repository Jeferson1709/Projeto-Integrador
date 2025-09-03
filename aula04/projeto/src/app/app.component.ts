import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import {olamundoComponent }from './olamundo/olamundocomponent'
import {MinhapaginaComponent  } from "./minhapagina/minhapagina.component";
import {PrincipalComponent  } from "./principal/principal.component";
import {FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [MinhapaginaComponent,PrincipalComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
