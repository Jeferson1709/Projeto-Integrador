import { Component } from '@angular/core';
//Rputer link para criar o caminho
import { RouterOutlet, RouterLink } from '@angular/router';
// Importação da Biblioteca Barra de Navegação.
import { MatToolbarModule } from '@angular/material/toolbar';
// Importação da Biblioteca de Icones.
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'material--exemplo';
}
export class SlideToggleConfigurableExample {
  checked = false;
  disabled = false;
}
