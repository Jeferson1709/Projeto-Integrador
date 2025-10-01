import { Routes } from '@angular/router';

// Primeiro temos que importar o(os) arquivos dos componentes
import { CadastroComponent } from './cadastro/cadastro.component';

//Configurar as rotas.
//Colocar exatamente o mesmo nome entre o path e RouterLink.
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastroComponent },
];
